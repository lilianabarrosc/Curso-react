import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import PopularMovieContextProvider from "./contexts/PopularMovieContext";
import MovieContextProvider from "./contexts/MovieContext";
import Movies from "./components/movies";
import MovieDetail from "./components/MovieDetails";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <PopularMovieContextProvider>
          <Movies />
        </PopularMovieContextProvider>
      </Route>
      <Route path="/movie/:movie_id">
        <MovieContextProvider>
          <MovieDetail />
        </MovieContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App;
