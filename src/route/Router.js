import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import FutureClinic from "../pages/FutureClinic/index";

const BasicRoute = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/future/clinic" component={FutureClinic} />
  </BrowserRouter>
);

export default BasicRoute;
