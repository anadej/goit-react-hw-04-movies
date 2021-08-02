import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../components/searchbar/SearchForm";
import { fetchSearchMovie } from "../services/api";
import { MoviePageStyled } from "./MoviPageStyled";

class MoviesPage extends React.Component {
  state = {
    foundMovies: [],
    isLoading: false,
  };

  async componentDidMount() {
    const { location } = this.props;
    if (!location.search) return;
    try {
      const response = await fetchSearchMovie(location.search.substr(6));
      this.setState({ foundMovies: [...response] });
    } catch (error) {
      console.log(`error`, error);
    }
  }

  onSearchSubmit = async (query) => {
    this.setState({ foundMovies: [], query: "", isLoading: true });
    try {
      const response = await fetchSearchMovie(query);
      this.setState({ foundMovies: [...response] });
      this.props.history.push({ search: `query=${query}` });
    } catch (error) {
      console.log(`error`, error);
    }
    this.setState({ isLoading: false });
  };

  render() {
    const { foundMovies } = this.state;
    return (
      <MoviePageStyled>
        <SearchForm onSubmit={this.onSearchSubmit} />
        <ul className="moviesSearchList">
          {foundMovies.map((movie) => (
            <li className="movieSearchItem" key={movie.id}>
              <Link
                className="movieSearchLink"
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: this.props.location, //передаем целый location в окно MovieDetailsPage
                  },
                }}
              >
                <img
                  className="movieSearchImage"
                  src={`https://www.themoviedb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </MoviePageStyled>
    );
  }
}

export default MoviesPage;
