import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";
import "../Signup/signup.css";
import Logo from "../logo.png"


function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    highScore: 0
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.password)
      .then(res => {

        // send them to the login page
        history.replace("/login");
      })
      .catch(err => alert(err));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="uk-cover-container uk-height-viewport Signup" id="signupContainer">
      <div className="uk-card uk-card-body">
      <img id="signup-logo" src={Logo}></img>
        <h2 id="signup-head">Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: pencil"></span>
              <input className="uk-input"
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                onChange={handleChange}></input>
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input className="uk-input"
                type="password"
                placeholder="Password"
                name="password"
                id="pwd"
                onChange={handleChange}></input>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" id="signup-btn">
            Submit
          </button>
        <p>
          <Link id="gotologin" to="/login">Go to Login</Link>
        </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
