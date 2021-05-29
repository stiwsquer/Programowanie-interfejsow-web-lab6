import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <body>
        <header class="main-head">
          <nav>
            <h1 id="logo">Jacob Pizza</h1>
            <ul className="nav-links">
              <NavLink className="nav_link" id="nav-menu" to="/menu" exact>
                Menu
              </NavLink>
              <NavLink className="nav_link" id="nav-login" to="/login">
                Login
              </NavLink>
              <NavLink className="nav_link" id="nav-register" to="/register">
                Register
              </NavLink>
              <NavLink className="nav_link" id="nav-logout" to="/">
                Logout
              </NavLink>
            </ul>
          </nav>
        </header>
        <main>
          <Main />
        </main>
      </body>
    </Router>
  );
}

export default App;
