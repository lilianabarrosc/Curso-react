import React, {Fragment} from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/home/Home';


import { Switch, Route } from "react-router-dom";
import PeliDetails from './components/Peli-details/peli-details';

const App = () => (
  <div>
    <Fragment>
        <Header />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/movie/:id" component={PeliDetails} />
        </Switch>
        <Footer />
    </Fragment>
  </div>
  
);

App.displayName = 'App';

export default App;
