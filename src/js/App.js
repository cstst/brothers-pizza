import React, { useState, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Promotions from "./Promotions";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Nav />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/menu" component={Menu} />
            <Route path="/promotions" component={Promotions} />
            <Route path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
        </main>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}
