
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "view/app/app";

const history = createBrowserHistory();

const RouteConfig =
  <Router history={history}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router >

export default RouteConfig;