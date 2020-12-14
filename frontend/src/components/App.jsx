import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {HomeView} from "./home/HomeView";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView}/>
      </Switch>
    </BrowserRouter>
  );
};
