import React from "react";
import CountUp from "react-countup";

import './home.css';
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import img1 from "../../assets/img/t.jpg";

const home = () => {


  return (
    <section className="home-wrapper ">
      <div className=" paddings innerWidth flexCenter home-container">
        {/* left side
          */}
        <div className="home-left">
          <div className="home-title">
            <h1>
              Hello <br />
              I'm a computer <br />
              science student   <br />
              
            </h1>
          </div>
          <div className="FlexColSatrt home-desc">
            <span className="secondaryTextfordesc"> I'm a junior 
              develloper using 
              java (spring)
              and react</span>
            <span className="secondaryTextfordesc">and I'm interested in Devops, 
              and Data science</span>
          </div>
          <div className="flexCenter stas">
            <div className="FlexColCenter sta">

              <span>
                <CountUp start={0} end={3} duration={4} />
                <span>+</span>   </span>

              <span className="secondaryText">Projects</span>
            </div>
            <div className="FlexColCenter sta">

              <span>
                <CountUp start={0} end={1} duration={8} />
                <span></span>   </span>

              <span className="secondaryText">Experience</span>
            </div>

           
          </div>
        </div>

        {/* right side
 */}

        <div className="flexCenter home-right">
          <div className="image-container">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default home; 