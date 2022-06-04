import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";

function Navbar2() {
  return (
    <div className="navbar2">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar2;
