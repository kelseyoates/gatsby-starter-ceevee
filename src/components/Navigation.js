import React from "react";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#services">
          Services
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#our-team">
          Our Team
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#testimonials">
          Testimonials
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#footer">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
