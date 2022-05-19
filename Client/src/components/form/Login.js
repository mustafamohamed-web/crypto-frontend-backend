import React, { useState } from "react";
import axios from "axios";
import "../../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = (e) => {
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  };
  return (
    <div className="login-content-right">
      <form className="login">
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="login-inputs">
          <label className="form-label">Username</label>
          <input
            className="login-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="login-inputs">
          <label className="form-label">Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button onClick={login} className="login-input-btn" type="submit">
          Login
        </button>
        <h1> {`Welcome back ${loginStatus}`}</h1>
      </form>
    </div>
  );
};

export default Login;
