import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import PopularMovieContextProvider from "./contexts/PopularMovieContext";
import Movies from "./components/movies";
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
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App;
