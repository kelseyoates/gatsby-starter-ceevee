import React from "react";

import joannePic from "../assets/images/jl.png";
import sslcPic from "../assets/images/sslc-big.png";

const About = () => (
  <section id="about">
    <div className="row about">
      <div className="three columns">
      <h1>About Us</h1>
        <img className="profile-pic" src={sslcPic} alt="" />
      </div>
      <div className="nine columns main-col">
        <p>From our President and Founder...</p>
        <p>Since 1988, South Shore Laboratory Consultants has provided clinical laboratory consulting services to laboratories seeking CLIA or CAP certification, MA and other state licensures. We have the expertise to facilitate all needs, from initial laboratory start-up through complete licensure, while ensuring continuous maintenance of your regulatory and quality systems. South Shore Laboratory Consultants has a 100% success rate for maintaining compliance with both CLIA, CAP and state regulations in our affiliated laboratories. We pride ourselves for working in a hands-on, friendly manner with the ability to interact successfully at both the laboratory and administrative levels.</p>
        <p>Joanne B. Lannon, M.Ed., DLM(ASCP)</p>
        <p>South Shore Laboratory Consultants, Inc.</p>

      </div>
    </div>
  </section>
);

export default About;
