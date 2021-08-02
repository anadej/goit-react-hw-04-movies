import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../pages/HomePage")),
    exact: true,
  },
  {
    name: "Movies",
    path: "/movies",
    component: lazy(() => import("../pages/MoviesPage")),
    exact: true,
  },
];
