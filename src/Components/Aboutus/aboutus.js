

import React, { useEffect, useRef, useState } from "react";
import "./aboutus.css";
import { BsArrowDownCircle } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

import Building from "../../Images/image1.avif";

const AboutUsHero = () => {

//Annimation of About-info
useEffect(() => {
  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    once: true, // Trigger animation only once
  });
}, []);
//
const handleScrollDown = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
};


  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          {/* Left Section */}
          <div className="vertical-line" style={{height:"180px"}}></div>
          <div className="about-hero-heading">
            
            <h1>
              <span>COMMITTED TO EXCELLENCE</span>
            </h1>
            <h2>Producing with meticulous attention to detail</h2>
            {/* <div className="scroll-down" onClick={handleScrollDown} >
                     <BsArrowDownCircle size={35} style={{marginTop:"20px"}}/>
                    </div> */}
          </div>

          {/* Right Section */}
          <div className="about-hero-description">
            <h6 style={{ color: "#ffc107", fontSize:"18px" }}>
              WHEN QUALITY & RELIABILITY IS VITAL, SHEETAL RUBBER PRODUCTS (P)
              LTD. IS YOUR BEST CHOICE.
            </h6>

            <p style={{ color: "white", fontSize:"16px",marginLeft:"-10px",padding:"10px" }}>
              For over two decades, Sheetal Rubber Products has been a trusted
              leader in the manufacturing of high-quality rubber products with
              50,000 sq. ft. of manufacturing facility. We specialize in
              manufacturing a full range of low-pressure hoses, including
              platinum silicone-lined, FMK-lined fuel cell hoses,
              flame-retardant hoses, and various moulded components. Our
              commitment to product expertise, engineering excellence, rigorous
              testing, and strict quality controls has established us as a
              preferred partner for major manufacturers in India and a favored
              exporter internationally.
            </p>

            <ul>
              <li>
                Committed towards continual improvement, quality control and
                customer satisfaction.
              </li>
              <li>Believes in the concept of Total Quality Management.</li>
              <li>
                Fully fledged traceability system (Raw material to Finished
                goods).
              </li>
              <li>
                All Raw Materials are tested, before being used, based on their
                Quality Policy.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-info">
        <div className="about-info-container">
          {/* Left Image Section */}
          <div className="about-info-image">
            <img src={Building} alt="About Us" />
          </div>

          {/* Right Info Section */}
          <div className="about-info-text"
           data-aos="fade-down" 
           data-aos-offset="200" 
          >
            <h3 style={{ color: "#ffc107" }}>
              Precision Engineered Rubber Solutions
            </h3>
            
            <p>
              Sheetal Rubber Products Pvt Ltd., located in Bhosari, Pune, is a
              leading manufacturer of high-quality rubber products with over two
              decades of experience. We specialize in a diverse range of
              low-pressure hoses, including critical applications such as
              platinum silicone-lined medical tubing, FMK-lined fuel cell
              hoses, and flame-retardant hoses.Our state-of-the-art
              manufacturing facility in Bhosari, coupled with a strong emphasis
              on research and development, allows to consistently deliver
              innovative and reliable solutions to customers across various
              industries.
            </p>
          </div>
          
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <div className="mission-vision-container">
          {/* Mission Section */}
          <div className="mission" 
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          >
            <h2>Our Mission</h2>
            <hr></hr>
            <p>
              To become the leading manufacturer of elastomeric products
              supplying to world’s prominent industries, aspiring to be the
              “preferred OEM” to all Tire I and II suppliers, committing to
              superior service and high quality.
            </p>
          </div>

          {/* Vision Section */}
          <div className="vision"
       data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <h2>Our Vision</h2>
            <hr></hr>
            <p>
              • To be the “Manufacturer of choice”, delivering superior customer
              value, embracing our technology – leadership and commitment to
              quality.
            </p>
            <p>
              • To respect team members as instrumental part of organization’s
              growth, ensuring their active involvement and continuous progress.
            </p>
            <p>
              • Firmly practice environmental friendly processes reflecting our
              strong belief to optimally contribute to society, promoting
              development of our country.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsHero;
