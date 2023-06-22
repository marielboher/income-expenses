import React from "react";
import "./navbar.css";
import { FiArrowDownRight } from "react-icons/fi";

const Nabvar = () => {
  return (
    <div>
      <div>
        <nav>
          <ul className="navbar-tracker">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <div className="nav-tracker">
                <a href="">Get Started</a>
                <FiArrowDownRight className="icon-nav" />
              </div>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nabvar;
