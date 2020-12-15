import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.scss";
import {HomeView} from "./home/HomeView";
import {NotFoundView} from "./notfound/NotFoundView";
import {RepositoryView} from "./repo/RepositoryView";
import {RepositoryListView} from "./repolist/RepositoryListView";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/:user" component={RepositoryListView} />
        <Route exact path="/:user/:repo" component={RepositoryView} />
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
};
