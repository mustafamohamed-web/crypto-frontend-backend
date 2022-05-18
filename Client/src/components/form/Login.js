import React, { useState } from "react";
import axios from "axios";
import "../../styles/Login.css";

const Login = () => {
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
          />
        </div>

        <div className="login-inputs">
          <label className="form-label">Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <button className="login-input-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
