import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Oiêêê</h1>} />
      <Route path="/login" component={() => <h1>Login</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
