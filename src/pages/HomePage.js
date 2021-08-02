import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { fetchTrendingToday } from "../services/api";
import { HomePageStyled } from "./HomePageStyled";

class HomePage extends React.Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    try {
      const response = await fetchTrendingToday();
      this.setState({ trendingMovies: [...response] });
    } catch (error) {
      console.log(`error`, error);
    }
  }

  render() {
    const { trendingMovies } = this.state;
    console.log(`object`, trendingMovies.poster_path);
    return (
      <HomePageStyled>
        <h2 className="homeTrendTitle">Trending today</h2>
        <ul className="homeTrendList">
          {trendingMovies.map((movie) => (
            <li className="homeTrendItem" key={movie.id}>
              <Link
                className="homeTrendLink"
                to={{
                  pathname: `/movies/${movie.id}`, //куда перейти по клику
                  state: { from: this.props.location.pathname }, //передаем откуда переходим
                }}
              >
                <img
                  className="homeTrendImage"
                  src={`https://www.themoviedb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </HomePageStyled>
    );
  }
}

export default withRouter(HomePage);
