import React, { useState } from "react";
import axios from "axios";

import "../../styles/Form.css";

const Sign = () => {
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
    <div className="form-content-right">
      <form className="form">
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => {
              setUserRegister(e.target.value);
            }}
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPasswordRegister(e.target.value);
            }}
          />
        </div>

        <button onClick={register} className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default Sign;
