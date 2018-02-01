import React from "react";
import joannePic from "../assets/images/jl3.jpg";
import glennPic from "../assets/images/gb.jpg";
import kathyPic from "../assets/images/kathy.jpg";
import lizPic from "../assets/images/liz.jpeg";
import { FaPaperPlane, FaLinkedin, FaCalendar } from "react-icons/lib/fa";


const Work = () => (
  <div id="our-team" className="row work">
    <div className="ten columns header-col offset-1">
      <h1>Our Team</h1>
      <h6>Whether you are interested in start-up services through completion of CLIA and Massachusetts state licensure, on-going oversight of your lab or consulting for special projects related to your laboratory, South Shore Laboratory Consultants is available to address your needs.</h6>
    </div>

<div className="twelve columns">
    <div className="six columns header-col">
      <div className="team-member">
        <img className="team" src={joannePic} alt="" />
        <h3>Joanne B. Lannon, M.ED., DLM (ASCP)</h3>
        <h5>Founder & President</h5>
          <p>Joanne Lannon, President and Founder of South Shore Laboratory Consultants, has over 25 years of experience in laboratory medicine, and has provided consulting services to many types of clinical laboratories since 1988.</p>
          <p>the state of Massachusetts, she has used her vast experience to maintain an exceptional reputation within the industry. Joanne is always highly recommended by professionals in her field.</p>
          <p>She has a Masters Degree in Education and is certified by the American Society of Clinical Pathologists as a Diplomate in Laboratory Management.</p>
      </div>

      <div className="member-social">
              <a href="mailto:joannelannon@sslabconsultants.com"><FaPaperPlane/></a>
              <a href="https://www.linkedin.com/company/27222319/" target="blank"><FaLinkedin/></a>
              {/* <a href="http://www.calendly.com" target="blank"><FaCalendar/></a> */}
      </div>

    </div>

    <div className="six columns header-col">
      <div className="team-member">
      <img className="team" src={kathyPic} alt="" />
        <h3>Kathleen R. Oates, MT (ASCP) MPH</h3>
        <h5>Director of Quality Assurance</h5>
          <p>Director of Quality Assurance for South Shore Laboratory Consultants since 1993, Kathy Oates has worked in laboratory medicine for over 25 years.</p>
          <p>Her past employment includes Supervisor of the Clinical Laboratory Program at the Massachusetts Department of Public Health.</p>
          <p>Kathy is highly respected by her peers and well known by professionals throughout the industry. She is a Medical Technologist certified by the American Board of Clinical Pathologists and holds a Masters of Public Health from Boston University.</p>
      </div>

      <div className="member-social">
              <a href="mailto:koates@sslabconsultants.com "><FaPaperPlane/></a>
              {/* <a href="http://www.linkedin.com" target="blank"><FaLinkedin/></a> */}
              <a href="http://www.calendly.com/kathyoates" target="blank"><FaCalendar/></a>
      </div>

    </div>

</div>

<div className="twelve columns">
    <div className="six columns header-col">
      <div className="team-member">
      <img className="team" src={glennPic} alt="" />
        <h3>Glenn Bouchie, MT (ASCP)</h3>
        <h5>Senior Regulatory Consultant</h5>
          <p>Glenn Bouchie is an ASCP Board registered Medical Technologist. He has functioned as a Laboratory Manager, Senior Research Scientist, Principle Investigator, CAP Inspector, and Technical Supervisor with over 25 years of experience in method research and development, regulatory compliance, laboratory operations management, quality assurance, and process improvement in Research, Hospital, Clinical Diagnostic, Drug Development, and Life Sciences settings.</p>
      </div>

      <div className="member-social">
              <a href="mailto:gbouchie@sslabconsultants.com "><FaPaperPlane/></a>
              {/* <a href="http://www.linkedin.com" target="blank"><FaLinkedin/></a>
              <a href="http://www.calendly.com" target="blank"><FaCalendar/></a> */}
      </div>

    </div>


    <div className="six columns header-col">
      <div className="team-member">
      <img className="team" src={lizPic} alt="" />
        <h3>Elizabeth Mullady</h3>
        <h5>Senior Regulatory Consultant</h5>
          <p>Elizabeth Mullady is the newest member of the SSLC team. Bio on the way!</p>
      </div>

      <div className="member-social">
              <a href="mailto:emullady@sslabconsultants.com "><FaPaperPlane/></a>
              {/* <a href="http://www.linkedin.com" target="blank"><FaLinkedin/></a>
              <a href="http://www.calendly.com" target="blank"><FaCalendar/></a> */}
      </div>
    </div>
    
    </div>
    
  </div>
);

export default Work;
