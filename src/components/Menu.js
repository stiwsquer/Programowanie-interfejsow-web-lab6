import { auth } from "../config/Fire";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const Menu = () => {
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
    <section class="menu">
      <header className="menu-head">
        <h1>The Perfect Eating Experience</h1>
        <h3>
          Our pizzas are all hand made. We are cover everything <br /> from
          making the perfect dough to picking the best ingredients.
        </h3>
      </header>
      <div class="cards">
        <div class="card">
          <div class="card-icon">
            <img src="./icons/route-solid.svg" alt="" />
          </div>
          <h4>Margherita </h4>
          <p>
            Travel in over 250 countries with no effort. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Reiciendis, unde. Iure, libero.
            Exercitationem quibusdam.
          </p>
        </div>


        <div class="card">
          <div class="card-icon">
            <img src="./icons/route-solid.svg" alt="" />
          </div>
          <h4>Avocado </h4>
          <p>
            Travel in over 250 countries with no effort. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Reiciendis, unde. Iure, libero.
            Exercitationem quibusdam.
          </p>
        </div>



      </div>
    </section>
  );
};

export default Menu;
