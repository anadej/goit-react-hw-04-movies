import React, { Suspense, lazy } from "react";
import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router-dom";
import MainStyled from "./MainStyled";

const HomePage = lazy(() =>
  import("../../pages/HomePage" /* webpackChunkName: "home-trend-movies" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../../pages/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);
const MoviesPage = lazy(() =>
  import("../../pages/MoviesPage" /* webpackChunkName: "movies-search-page" */)
);

const Main = () => {
  return (
    <MainStyled>
      <Suspense
        fallback={
          <div className="loader">
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          </div>
        }
      >
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/movies/:id" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </Suspense>
    </MainStyled>
  );
};

export default Main;
