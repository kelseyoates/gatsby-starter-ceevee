import React from "react";
import {
  FaShield,
  FaLevelUp,
  FaUser,
  FaClipboard,
  FaFlask,
  FaPencil,
  FaLock,
  FaLifeBouy
} from "react-icons/lib/fa";

const Education = () => (

  <div className="row education">
  <h1><span> Services </span></h1>

  <div className="row">
     <div className="four columns">
     <div className="card">
     <h3 className="blue"><FaShield/></h3>
     <h3>Complete Regulatory Support</h3>
     <p> Running a lab is complicated, demanding, and ever - evolving. We do our job so that you can do yours. We’ll make sure you have all your documentation for both federal accreditation (CLIA, CAP) and state licensures (MA, NY, CA, FL, MD, PA, RI). That way, you can focus on what you do best - directing a high-performance laboratory while we handle the regulations.</p> <p> We have decades of experience with independent labs that perform CLIA moderate and high complexity laboratory developed tests (LDTs) as well as those performing clinical trial tests. Our current and past clients include biotechnology, biopharmaceutical, and diagnostic testing companies.</p> 
          <p> In addition, we offer Point of Care Testing (POCT) auditing. POCT auditing is available for physician office labs and large multi-site hospital systems to ensure regulatory compliance and the highest quality of patient care. SSLC provides a comprehensive audit report with their findings and actionable recommendations to achieve continual regulatory readiness. We utilize CLIA, CAP, MA state and the Joint Commission guidelines to conduct our comprehensive audit.   </p>
     <p> Our expertise has grown with the technology in labs and we can help you specifically with your genetic testing, including Sanger and Next-Generation Sequencing. </p>
     </div>
     </div>

     <div className = "four columns">

        <div className="card"><h3 className="blue" >< FaLevelUp /> </h3> <h3 > New Lab Start-Up</h3></div>


        <div className="card" >
          <h3 className="blue" > < FaUser/> </h3> <h3> Personnel Qualification</h3>  </div> 
       
        <div className="card" >
          <h3 className="blue" > < FaFlask/> </h3> <h3> Equipment Evaluation and Validation</h3 > </div>

        < div className = "card" > < h3 className = "blue" > < FaLifeBouy / > </h3> <h3 > Support of Training and Competency</h3 > </div>

        <div className="card">
          <h3 className="blue"><FaPencil /></h3>
          <h3>Assessment of Laboratory Efficiency & Organizational Issues</h3>
        </div>

        < div className = "card" > < h3 className = "blue" > < FaClipboard / > </h3> <h3>Point of Care Testing (POCT) Auditing</h3 > </div>


       </div>


      <div className="four columns">
        <div className="card">
          < h3 className="blue" > < FaShield /> </h3> <h3> Complete Quality Assurance</h3 > < p > As part of our ongoing support, we provide consistent QA Reviews - comprehensive audits of all required pre - analytic, analytic, and post - analytic laboratory operations using fixed quality monitors. </p><p>Our QA Reviews also ensure that the quality of your key systems such as QA, QC, Proficiency Testing, Equipment Maintenance, and Training / Competency are always maintained at the highest level. </p> <p > After the reports, we’ll be there
       for any corrective and preventative actions that may arise, including assistance with required Procedure Manual documentation: MA / CLIA / CAP / NY - compliant policy and procedural templates are provided.Let us know what you need and we can start working together today. </p>
        </div > 
        
        
        
        </div>

     </div>


  </div>


);

export default Education;
