

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./contactus.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
 FaEnvelope,
  
} from 'react-icons/fa';


const ContactUs = () => {
  const navigate = useNavigate();

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

//Annimation of About-info
useEffect(() => {
  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    once: true, // Trigger animation only once
  });
}, []);
//
const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadStatus(""); // Reset status on file change
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file first.");
      return;
    }

    // Simulate file upload (Replace with actual API call if needed)
    setTimeout(() => {
      setUploadStatus("File uploaded successfully!");
    }, 1000);
  };

  
  return (
    <div >
      {/* Hero Section */}
 
      <section className="contact-hero">
        <div className="contact-hero-content">
      
      <div className="contact-content">
      
        <div className="contact-text">
          <h1>GET IN TOUCH</h1>
          <h2>How can we help?</h2>
          <p>
          For inquiries related to Sheetal Rubber Pvt Ltd's operations in Bhosari, please use the contact form below or reach out directly using the provided email and contact details.
          </p>
         
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
        <p><FaEnvelope className="icon" />  sales@sheetalrubber.co.in</p>


        <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5735064498363!2d73.83004327496596!3d18.638243282478317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c745555555%3A0xc7aa3d886bd44d2a!2sSheetal%20Rubber%20Products%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1733346721960!5m2!1sen!2sin&center=18.638243282478317,73.83004327496596&zoom=15"
        style={{
          border: 0,
          width: "100%",
          height: "50vh",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </div>
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
            <label htmlFor="companyName">Company name *</label>
            <input type="text" id="companyName" placeholder="Company name" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Long answer *</label>
            <textarea id="message" placeholder="Your message" rows="4" required></textarea>
          </div>
       {/* File Attachment Section with Upload Button */}
       <div className="form-group">
              <label htmlFor="attachment">Attachment (PDF, JPG, PNG, DOC)</label>
              <input
                type="file"
                id="attachment"
                accept=".pdf, .jpg, .png, .doc, .docx"
                onChange={handleFileChange}
              />
              <button type="button" className="upload-btn" onClick={handleFileUpload}>
                Upload Attachment
              </button>
              {uploadStatus && (
                <p
                  className={`upload-status ${
                    uploadStatus === "File uploaded successfully!"
                      ? "success"
                      : "error"
                  }`}
                >
                  {uploadStatus}
                </p>
              )}
            </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>

    {/* <section className="map-section">
      
      <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5735064498363!2d73.83004327496596!3d18.638243282478317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c745555555%3A0xc7aa3d886bd44d2a!2sSheetal%20Rubber%20Products%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1733346721960!5m2!1sen!2sin&center=18.638243282478317,73.83004327496596&zoom=15"
        style={{
          border: 0,
          width: "100%",
          height: "50vh",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </div>
    </section> */}
    
    <section className="partnership-section">
  <div className="partnership-content">
    <div className="partnership-text">
      <h2>We Are Open For Partnership !!!</h2>
      <p>
        Due to our flexible structure, we are always open to partners.
      </p>
      <p>
        This creates conditions for long-term and fruitful cooperation.
        Individual approach to collaboration allows us to develop mutually
        beneficial relationships with each of the partners.
      </p>
      <p>
        We work with our partners, suppliers, startups, universities, students, 
        talents, technology enthusiasts, creators, and creative minds to turn 
        exciting ideas into innovations and bring them to life.
      </p>
      {/* <button className="contact-button" onClick={() => window.location.href = "/contactus"}>
        Contact Us
      </button> */}
 
<Link 
      to="/contactus" 
      className="contact-button" 
      onClick={() => window.scrollTo(0, 0)}
    
    >
      Contact Us
    </Link>


    </div>
    <div className="partnership-image">
      <img src={require("../../Images/partnership.jpg")} alt="Partnership" />
    </div>
  </div>
</section>

      {/* <section className="factory-img">
        </section> */}
  
    </div>
  );
};

export default ContactUs;
