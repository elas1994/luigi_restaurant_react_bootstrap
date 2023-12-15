import React from "react";
import MenuBtn from "../components/MenuBtn";
import Img1 from "../assets/17.jpg";
import { Link } from "react-router-dom";

import "./page_style/Home.css";

const Home = () => {
  return (
    <div className="home_page">
      <header className="  d-flex align-items-center text-light shadow ">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center ">
              <h2 className=" mb-0 text-black fw-bold">Welcome to</h2>
              <h1 className="mb-4 fw-bold text-success text-center text-sm-start">
                LuiGi
              </h1>
              <MenuBtn />
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5 ">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img
              loading="lazy"
              className=" img-fluid w-50"
              src={Img1}
              alt="img"
            />
          </div>

          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className=" fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              accusantium! A nobis pariatur nulla neque animi debitis. Doloribus
              tempore sapiente facere nobis!
            </p>

            <p className="mb-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              consectetur saepe beatae quis ducimus necessitatibus soluta, minus
              ab repellendus ipsum tenetur esse, porro dolorem odit! Maxime,
              mollitia nulla?
            </p>

            <Link to="/luigi_restaurant_react_bootstrap/about">
              <button type="button" className="btn btn-outline-success btn-me">
                More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
