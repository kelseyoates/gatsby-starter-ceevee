import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaInstagram,
  FaGithub,
  FaLinkedinSquare
} from "react-icons/lib/fa";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">South Shore Laboratory Consultants, Inc</h1>
      <h3>
        Our goal is the <span>success</span> of your laboratory.
      </h3>
      <hr />
      <ul className="social">
        <li>
          <a href="https://www.linkedin.com/company/27222319/" target="blank">
            <FaLinkedinSquare/>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Banner;
