import React from "react";
import CountUp from "react-countup";

import './contact.css';
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import img1 from "../../assets/img/pen.jpg";
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';


const contact = () => {
    return (
   
      
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="c-left FlexColSatrt">
            <span className="orangeText"> My Contacts</span>
                <span className="primarText" style={{ color:'orange'}}>Easy way to contact me</span>
                <span className="secondaryText">
                 If you find my projects interistings, or you like my 
                 level, or if you have an opportunity of an internship , 
                  don't hesitate to contuct me
                </span>
                <div className="FlexColSatrt contactModes">
                    <div className="flexCenter row">
                        <div className="FlexColSatrt mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                     <MdCall size={25}/> 
                                </div>
                                <div className="FlexColSatrt detail">
                                    <span className="primarText" style={{ color:'orange'}}>
                                        Call
                                    </span>
                                    <span className="secondaryText" style={{ color:'orange'}}>
                                        0664257159
                                    </span>
                                </div>
                            </div>
                          
                        </div>
                         <div className="FlexColSatrt mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/> 
                                </div>
                                <div className="FlexColSatrt detail">
                                    <span className="primarText" style={{ color:'orange'}}>
                                    Send me an email

                                    </span>
                                    <span className="secondaryText" style={{ color:'orange'}}>
                                        ballateothmane32@gmail.com
                                    </span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="image-container">
                <img src={img1} alt="" className="hj"/>
                </div>
               
            </div>
        </div>
    </section>

);
};

export default contact; 