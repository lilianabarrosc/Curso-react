import React, { Suspense, lazy } from "react";
//import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/style.css";

import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

import PopularMovieContextProvider from "./contexts/PopularMovieContext";
import MovieContextProvider from "./contexts/MovieContext";
import PopularTVContextProvider from "./contexts/PopularTVContext";
import TVContextProvider from "./contexts/TVContext";

import Movies from "./pages/movies";
import MovieDetail from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import TVDetail from "./pages/TVDetails";

// Se aplica carga lazy
//import TV from "./pages/TV";
import ProgressBar from "./components/Common/ProgressBar";
const TV = lazy(() => import("./pages/TV"));

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Suspense fallback={
        <div>
          <ProgressBar/>
        </div>
      }>
        <Route exact path="/">
          <PopularMovieContextProvider>
            <Movies />
          </PopularMovieContextProvider>
        </Route>
        <Route path="/movie/detail/:movie_id">
          <MovieContextProvider>
            <MovieDetail />
          </MovieContextProvider>
        </Route>

        <Route path="/tv">
          <PopularTVContextProvider>
            <TV />
          </PopularTVContextProvider>
        </Route>
        <Route path="/tv/detail/:tv_id">
          <TVContextProvider>
            <TVDetail />
          </TVContextProvider>
        </Route>

        {/* <Route component={NotFound} /> */}
      </Suspense>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
