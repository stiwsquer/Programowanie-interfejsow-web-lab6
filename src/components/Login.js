import { auth } from "../config/Fire";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Zalogowano");
        setRedirect(true);
      })
      .catch((error) => {
        console.log("error");
        return <Redirect to="/error" />;
      });

    // var loginNav = document.getElementById("nav-login");
    // loginNav.classList.add("nav-login-disabled");
  };

  if (redirect) return <Redirect to="/menu" />;

  return (
    <section class="form form-login">
      <div class="form-wrapper">
        <header class="form-head">
          <h2>Login</h2>
        </header>

        <div class="email-form">
          {/* <label for="email"> Email: </label> */}
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div class="password-form">
          {/* <label for="password">Password:</label> */}
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" onClick={login}>
          Submit
        </button>
      </div>
    </section>
  );
};

export default Login;
