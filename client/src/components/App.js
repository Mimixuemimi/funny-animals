import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import CategoriesList from "./CategoriesList.js";
import CategoryShow from "./CategoryShow.js";
import HomePage from "./HomePage.js";
import AnimalsList from "./AnimalsList.js";
import AnimalShow from "./AnimalShow.js";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={CategoriesList} />
        <Route exact path="/categories" component={CategoriesList} />
        <Route exact path="/categories/:id">
          <CategoryShow user={currentUser} />
        </Route>

        <Route exact path="/animals" component={AnimalsList} />
        <Route exact path="/animals/:id">
          <AnimalShow user={currentUser} />
        </Route>

        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);
