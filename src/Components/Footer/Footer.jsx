import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import brandlogo from "../Assets/brandlogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={brandlogo} alt="loading.." />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <SocialIcon network="whatsapp" />
        </div>
        <div className="footer-icons-container">
          <SocialIcon network="linkedin" />
        </div>
        <div className="footer-icons-container">
          <SocialIcon network="github" />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p>Copyright @2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
