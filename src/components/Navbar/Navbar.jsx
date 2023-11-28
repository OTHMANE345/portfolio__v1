import React, { useState } from "react";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import { MdCall } from 'react-icons/md';
import OutsideClickHandler from "react-outside-click-handler"
const NavBarFor = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" }
    }
  }
  return (

    <section className="h-wrapper">
      <div className="flexStart paddings innerWidth  h-container">
        <span className="h-name">BALLAT OTHMANE</span>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false)
          }}
        >

          <div className="flexEnd h-menu"
            style={getMenuStyle(menuOpened)}
          >        
            <a href=""> home</a>

            <a href="">Projects</a>
            <a href="">Exeperiences </a>

            <button className="button">
              <a href=""> Contuct me  </a>
            </button>

          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <MdCall size={30} />
        </div>
      </div>


    </section>
  );
};

export default NavBarFor; 