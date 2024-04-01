import { lazy } from "react";

export const LazyHome = lazy(
  () => import(/* webpackChunkName: "LazyHome" */ "@pages/Home")
);
export const LazyAbout = lazy(
  () => import(/* webpackChunkName: "LazyAbout" */ "@pages/About")
);
export const LazyUsers = lazy(
  () => import(/* webpackChunkName: "LazyUsers" */ "@pages/Users")
);
export const LazyRoot = lazy(
  () => import(/* webpackChunkName: "LazyRoot" */ "./Root")
);
export const LazyTerms = lazy(
  () => import(/* webpackChunkName: "LazyTerms" */ "@/pages/Terms")
);
