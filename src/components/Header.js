// Header.js

import React from "react";
import { Link } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import './Header.css'

const Header = () => {
  const isAuth = localStorage.getItem("accessToken");
  return (
    <header>
      <h1>Equity Afya Hospital</h1>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          {isAuth ? (
            <li>
              <Link>
              <AccountCircleIcon color="#000000" />
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link className="link" to="/Log In">
                  Log In
                </Link>
              </li>
              <li>
                <Link className="link" to="/Registration">
                  Registration{" "}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
