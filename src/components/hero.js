import React, { Fragment } from "react";
import {Image,Button } from "react-bootstrap";
import hero from "./img/hero1.jpg";
import "./hero.css";

function HeroSection() {
  return (
    <Fragment>
      <div className="hero-block">
        <h1>hello</h1>
        <Image src={hero} className="img" fluid />
        <span id="overlay"></span>
        <div id="head-text">
          <p className='quote-sd' >Change is the result of all true learning</p>
          <p className="quote-hd">Like what you are learning </p>
          <br />
          <p className="quote-hd">Get started today </p>
          <div>
            <Button variant="primary" size="sm" className="head-btn ">
              Get Started >
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HeroSection;
