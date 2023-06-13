import React from "react";

import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import './fotter.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
            magna in leo fringilla tempor. Proin at neque eu eros tincidunt
            hendrerit at ac ante.
          </p>
        </div>
        <div className="footer-column">
          <h2>Customer Service</h2>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Shipping Information</a>
            </li>
            <li>
              <a href="#">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h2> ShopVibe</h2>
          <div className="logofooter">
            <AiFillGoogleCircle />
            <AiFillFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
