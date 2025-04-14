import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/report">ReportList</Link>
        <Link to="/reports">ReportForm</Link>
      </div>
    </nav>
  );
};

export default Navbar;