import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { auth } from "../config/Fire";
import Login from "./Login";
import Register from "./Register";
import StarterSite from "./StarterSite";

function Main() {
  const logout = () => {
    console.log("wylogowano");
    auth.signOut().then(() => {
      console.log("wylogowano");
    });
  };

  return (
    <Switch>
      <Route onClick={logout} path="/" exact>
        <div onClick={logout}></div>
        <StarterSite />
      </Route>
      <Route path="/menu" exact></Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>

      <Route>
        <h1>
          {" "}
          <section>404 page not found</section>
        </h1>
      </Route>
    </Switch>
  );
}

export default Main;
