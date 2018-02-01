import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaChevronCircleUp,
  FaLinkedin
} from "react-icons/lib/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/company/27222319/" target="blank">
              <FaLinkedin />
            </a>
          </li>
          
        </ul>

        <ul className="copyright">
          <li>&copy; Copyright 2018</li>
          <li>
            <a title="Kelsey Oates" href="http://www.kelseyoates.me" target="blank">Kelsey Oates</a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
