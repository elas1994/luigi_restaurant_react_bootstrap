import React from "react";
import { Link } from "react-router-dom";

const MenuBtn = () => {
  return (
    <div>
      <Link to="/luigi_restaurant_react_bootstrap/menu">
        <button className=" btn btn-success btn-me " type="button">
          Our Menu
        </button>
      </Link>
    </div>
  );
};

export default MenuBtn;
