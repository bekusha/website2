import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";
import f from "../images/icon-facebook.svg";
import t from "../images/icon-twitter.svg";
import i from "../images/icon-instagram.svg";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <img src={logo} width={33} alt="asdasd" height={33} />
      </div>
      <div className="footerText">
        <span>FAQs</span>
        <span>Contact Us</span>
      </div>
      <div className="footerText">
        <span>Privaci Policy</span>
        <span>Press Kit</span>
      </div>
      <div className="footerText">
        <span>Install Guide</span>
      </div>
      <div className="socialLogos">
        <img src={f} alt="asdad" />
        <img src={t} alt="asdasd" />
        <img src={i} alt="asdasd" />
      </div>
    </div>
  );
};

export default Footer;
