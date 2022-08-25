import React, { useState } from "react";
import img from "../../assests/logo.png";
import "../../styles/Nav.css";
import { Link } from "react-router-dom";
import Main from "../../components/Main";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-card">
        <img className="logo" src={img} alt="" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/market">Market</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
