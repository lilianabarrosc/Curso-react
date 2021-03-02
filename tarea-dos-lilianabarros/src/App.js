import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

const App = () => (
  <BrowserRouter>
    <Header />
    <Footer />
  </BrowserRouter>
)

export default App;
