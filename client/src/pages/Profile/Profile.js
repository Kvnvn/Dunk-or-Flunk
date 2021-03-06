import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import "../Profile/profile.css"

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <div className="uk-cover-container profile">
    <div className="container">
      <h1>On the profile page!</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <Link to="/">Go home</Link>
    </div>
    </div>
  );
}

export default Profile;
