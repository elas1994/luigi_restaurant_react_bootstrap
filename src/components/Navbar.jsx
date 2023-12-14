import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/luigi_restaurant_react_bootstrap/">Home</Link>
      <Link to="/luigi_restaurant_react_bootstrap/menu">Menu</Link>
      <Link to="/luigi_restaurant_react_bootstrap/about">About</Link>
      <Link to="/luigi_restaurant_react_bootstrap/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
