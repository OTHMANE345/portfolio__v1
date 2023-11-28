import React from "react";
import './Recedencies.css';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import img1 from "../../assets/img/blog.png";
import img2 from "../../assets/img/R.png";
import img3 from "../../assets/img/D.png";
import img4 from "../../assets/img/Dev.png";

import { sliderSettings } from "./commons";
const Recedencies = () => {


  return (
    <sextion className=" r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head FlexColSatrt">
                <span className="orangeText">Best Projects</span>
            </div>
<Swiper {...sliderSettings}>
<Sliderbuttons/>
    <SwiperSlide key={1}>
      <div className="FlexColSatrt r-card">
      <img src={img1} alt="" />
     
      <span className="primarText">Blog System with React and Spring Boot
</span>
      <span className="primarText">
      <button className="button">
      <a href="https://youtu.be/0mVamO63ctA" >see the video</a>
            </button>
      </span>

      </div>
    </SwiperSlide>
    <SwiperSlide key={2}>
      <div className="FlexColSatrt r-card">
      <img src={img2} alt="" />
     
      <span className="primarText">Estate Website with React js
</span>
      <span className="primarText">
      <button className="button">
      <a href="https://www.youtube.com/watch?v=n1sw0Qlw5J0" >see the video</a>
            </button>
      </span>

      </div>
    </SwiperSlide>

    <SwiperSlide key={3}>
      <div className="FlexColSatrt r-card">
      <img src={img3} alt="" />
     
      <span className="primarText">a Dashboard  using React js and Machine learning
</span>
      <span className="primarText">
      <button className="button">
      <a href="https://www.youtube.com/watch?v=heUbybXLdtw" >see the video</a>
            </button>
      </span>

      </div>
    </SwiperSlide>

    <SwiperSlide key={4}>
      <div className="FlexColSatrt r-card">
      <img src={img4} alt="" />
     
      <span className="primarText"> a devops project wich is a simple microservice and deploying it by minikube
</span>
      <span className="primarText">
      <button className="button">
      <a href="https://youtu.be/0mVamO63ctA" >see the code in github</a>
            </button>
      </span>

      </div>
    </SwiperSlide>
    
   
</Swiper>
        </div>
    </sextion>
  );
};

export default Recedencies  ; 

const Sliderbuttons = () => {
  const swiper = useSwiper();
  return (
<div className="flexCenter r-button">
  <button onClick={()=> swiper.slidePrev()}>&lt;</button> 
   <button onClick={()=> swiper.slideNext()}>&gt;</button>

</div>
  );
};