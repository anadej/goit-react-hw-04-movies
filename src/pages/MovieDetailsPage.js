import React, { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import { Link, Route } from "react-router-dom";
import { fetchDetailsMovie } from "../services/api";
import { MovieDetailsPageStyled } from "./MovieDetailsPageStyled";

const Cast = lazy(() =>
  import(
    "../components/movieCast/Cast" /* webpackChunkName: "movie-cast-info" */
  )
);
const Review = lazy(() =>
  import(
    "../components/movieReview/Review" /* webpackChunkName: "movie-reviews-info" */
  )
);

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
            <li className="movieCastReviewsItem">
              <Link
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
        <Suspense
          fallback={
            <div className="loader">
              <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            </div>
          }
        >
          <Route
            path={`/movies/${match.params.id}/cast`}
            render={() => <Cast movieId={match.params.id} />}
          />
          <Route
            path={`/movies/${match.params.id}/reviews`}
            render={() => <Review movieId={match.params.id} />}
          />
        </Suspense>
      </MovieDetailsPageStyled>
    );
  }
}

export default MovieDetailsPage;
