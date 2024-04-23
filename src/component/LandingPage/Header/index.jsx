import { useRef } from "react";
import { useState } from "react";
import style from "./Header.css";
import CustomButton from "../Button";
import trendSphere from "../../../assets/LandingPage/icons/trendsphere-icon.svg";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="logoimage">
        <img src={trendSphere} />
        <h2 className="trends">
          Trendsphere
          <br /> Boost
        </h2>
      </div>

      <ul className={isOpen ? "nav-list open" : "nav-list"}>
        <li className="home">
          <a href="#/home">Home</a>
        </li>
        <li>
          <a href="#/about">About</a>
        </li>
        <li>
          <a href="#/services">Services</a>
        </li>
        <li>
          <a href="#/contact">Contact</a>
        </li>
        <li>
          <button className="signup-button">Sign Up</button>
        </li>
      </ul>
      <button className="menu-toggle" onClick={toogleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </nav>
  );
};
