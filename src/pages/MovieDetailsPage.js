import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import Cast from "../components/movieCast/Cast";
import Review from "../components/movieReview/Review";
import { fetchDetailsMovie } from "../services/api";
import { MovieDetailsPageStyled } from "./MovieDetailsPageStyled";

class MovieDetailsPage extends React.Component {
  state = {};

  async componentDidMount() {
    try {
      const response = await fetchDetailsMovie(this.props.match.params.id);
      this.setState(response);
    } catch (error) {
      console.log(`error`, error);
    }
  }

  goBack = () => {
    const { location, history } = this.props;
    history.push(location.state.from); //возвращаемся на страницу с которой пришли
  };

  render() {
    const {
      title,
      poster_path,
      release_date = "",
      vote_average,
      overview,
      genres = [],
    } = this.state;
    const { location, match } = this.props;

    return (
      <MovieDetailsPageStyled>
        <button type="button" onClick={this.goBack}>
          Go back
        </button>
        <div className="movieDetailsContainer">
          <div className="leftSide">
            <img
              className="movieDetailsImage"
              src={`https://www.themoviedb.org/t/p/w300${poster_path}`}
              alt={title}
            />
          </div>
          <div className="rightSide">
            <h2 className="movieDetailsName">
              {title} ({release_date.slice(0, 4)})
            </h2>
            <p className="movieDetailsText">User Score: {vote_average * 10}%</p>
            <h3 className="movieDetailsTitel">Overview</h3>
            <p className="movieDetailsText">{overview}</p>
            <h3 className="movieDetailsTitel">Genres</h3>
            <ul className="movieDetailsGenresList">
              {genres.map((genre) => (
                <li className="movieDetailsGenresItem" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="movieCastReviewsContainer">
          <h3 className="movieCastReviewsTitle">Additional information</h3>
          <ul className="movieCastReviewsList">
            <li className="movieCastReviewsItem">
              <Link
                to={{
                  pathname: `/movies/${match.params.id}/cast`,
                  state: {
                    from: location.state.from, //передаем дальше сохраненны location страницы результата поиска
                  },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                className="movieDetailsInfo"
                to={{
                  pathname: `/movies/${match.params.id}/reviews`,
                  state: {
                    from: location.state.from, //передаем дальше сохраненны location страницы результата поиска
                  },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        {location.pathname === `/movies/${match.params.id}/cast` && (
          <div>
            <Suspense
              fallback={
                <div className="loader">
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={80}
                    width={80}
                  />
                </div>
              }
            >
              <Cast movieId={match.params.id} />
            </Suspense>
          </div>
        )}
        {location.pathname === `/movies/${match.params.id}/reviews` && (
          <div>
            <Suspense
              fallback={
                <div className="loader">
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={80}
                    width={80}
                  />
                </div>
              }
            >
              <Review movieId={match.params.id} />
            </Suspense>
          </div>
        )}
      </MovieDetailsPageStyled>
    );
  }
}

export default MovieDetailsPage;
