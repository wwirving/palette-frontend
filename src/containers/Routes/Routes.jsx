import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Colours from "../Colours";
import Palettes from "../Palettes";
import New from "../New";
import Home from "../Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/colours">
        <Colours />
      </Route>
      <Route exact path="/palettes">
        <Palettes />
      </Route>
      <Route exact path="/new">
        <New />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
