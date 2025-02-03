import React from "react";
import "./career.css";
import { BsArrowDownCircle } from "react-icons/bs";
import {
  FaPhoneAlt,
 FaEnvelope,
  
} from 'react-icons/fa';



function CareerPage() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div >
<section className="contact-hero">
        <div className="contact-hero-content">
      
      <div className="contact-content">
        <div className="vertical-line22"></div>
        <div className="contact-text">
          <h1>Build Your Career with Us.</h1>
          <h2> Together, We'll Achieve Great Things.</h2>
          <p>
          We're Hiring! Find Your Dream Role Here
          </p>
          <div className="scroll-down" onClick={handleScrollDown}>
           <BsArrowDownCircle size={30} />
          </div>
        </div>
      </div>
     </div>
      </section>

       {/* Form Section */}
           <section className="form-section-container">
           <div className="address-info">
            <h1>Sheetal Rubber Products (P) Ltd.</h1>
             <p>J-395, MIDC, Bhosari, Pune-411026 (INDIA)</p>
             <p><FaPhoneAlt className="icon" />  +91 -20 -27130244 ,+91 -20 -27130794</p>
             <p><FaEnvelope className="icon" />  sheetalrubber@gmail.com</p>
            </div>
           <div className="form-section">
       
             <form>
               <div className="form-group">
                 <label htmlFor="firstName">First name</label>

                 <input type="text" id="firstName" placeholder="First name" required />
               </div>
               <div className="form-group">
                 <label htmlFor="lastName">Last name</label>
                 <input type="text" id="lastName" placeholder="Last name" required />
               </div>

               <div className="form-group">
                 <label htmlFor="email">Email *</label>
                 <input type="email" id="email" placeholder="Email" required />
               </div>

               <div className="form-group">
                 <label htmlFor="phone">Phone</label>
                 <input type="tel" id="phone" placeholder="Phone" />
               </div>

               <div className="form-group">
                   <label htmlFor="position">Position You Are Applying For *</label>
          <input
            type="text"
            id="position"
            placeholder="Enter the position name"
            required
          />
               </div>
                {/* Upload Resume */}
               <div className="form-group">
               <label htmlFor="resume">Upload Your Resume *</label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            required
          />
               </div>
 {/* Cover Letter */}
 <div className="form-group">
          <label htmlFor="cover-letter">Upload Your Cover Letter *</label>
          <input
            type="file"
            id="cover-letter"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>

               <button type="submit" className="submit-btn">Submit</button>
             </form>
           </div>
         </section>
    </div>
  );
}

export default CareerPage;
