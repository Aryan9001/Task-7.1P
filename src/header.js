import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./header.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">DEV@Deakin</div>
      <div className="navbar-center">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <button className="post-button">POST</button>
        <Link to="/login">
          {/* Wrap the LOGIN button with Link */}
          <button className="login-button">LOGIN</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;