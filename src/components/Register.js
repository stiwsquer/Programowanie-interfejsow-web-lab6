import { auth } from "../config/Fire";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [redirect, setRedirect] = useState(false);

  const register = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      //   return <h3>Passwords don't match</h3>;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((loggedUser) => {
            loggedUser.user.updateProfile({
              displayName: displayName,
            });
          })
          .catch((error) => {
            console.log(error);
          });
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error);
        return <Redirect to="/error" />;
      });
  };

  if (redirect) return <Redirect to="/menu" />;

  return (
    <section class="form form-register">
      <div class="form-wrapper">
        <header class="form-head">
          <h2>Register</h2>
        </header>

        <div class="display-name-form">
          {/* <label for="display-name">Display Name:</label> */}
          <input
            id="display-name"
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Display Name"
            required
          />
        </div>

        <div class="email-form">
          {/* <label for="email">Email:</label> */}
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

        <div class="password-form">
          {/* <label for="password">Password:</label> */}
          <input
            id="confirmPassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>

        <button type="submit" onClick={register}>
          Submit
        </button>
      </div>
    </section>
  );
};

export default Register;
