import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import FutureClinic from "../pages/FutureClinic/index";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/future/clinic" component={FutureClinic} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
