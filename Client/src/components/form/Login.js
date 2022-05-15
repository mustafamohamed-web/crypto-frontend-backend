import React, { useState } from "react";
import axios from "axios";
import "../../styles/Login.css";

const Login = () => {
  const [userRegister, setUserRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const register = (e) => {
    axios
      .post("http://localhost:3001/register", {
        username: userRegister,
        password: passwordRegister,
      })
      .then((response) => {
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
        <h3>
          Get started with us today! Create your account by filling out the
          information below.
        </h3>
        <div className="login-inputs">
          <label className="login-label">Username</label>
          <input
            className="login-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => {
              setUserRegister(e.target.value);
            }}
          />
        </div>

        <div className="login-inputs">
          <label className="login-label">Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPasswordRegister(e.target.value);
            }}
          />
        </div>

        <button onClick={register} className="login-input-btn" type="submit">
          Sign up
        </button>
        <span className="login-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default Login;
