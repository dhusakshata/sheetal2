
import React, { useEffect, useRef, useState } from "react";
import "./inhousefacility.css";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import hoses from "../../Images/inhousebg.jpg";

import Facility1 from "../../Images/facility1.png";
import Facility2 from "../../Images/facility2.png";
import Facility3 from "../../Images/facility3.png";
import Facility44 from "../../Images/Rheometer.png";
import Facility55 from "../../Images/ozone_test_chamber-removebg-preview.png";
import Facility66 from "../../Images/muffle_furnace-removebg-preview.png";

import AOS from "aos";
import "aos/dist/aos.css";
 
const images = [
  { src: Facility1, 
    title: "Burst Pressure Test Machine",
    description: "A Burst Pressure Test Machine is a specialized piece of equipment designed to determine the maximum pressure a material, component, or product can withstand before it ruptures or bursts." , link: "/Burst-pressure-test-machines"},

  { src: Facility2, title: "Heating Ovens", description: "Heating ovens are essential equipment in various industries and laboratories. They provide controlled heat for a wide range of applications, from drying and curing to sterilization and testing.", link: "/Heating-oven" },

  { src: Facility3, title: "UTM - Universal Testing Machine", description: "A Universal Testing Machine (UTM), also known as a universal tester, tensile testing machine, or materials testing machine, is a versatile piece of equipment used to determine the mechanical properties of various materials.", link: "/UTM-tensil" },

  { src: Facility44, title: "Moving Die Rheometer", description: "A Moving Die Rheometer (MDR) is a specialized instrument used to evaluate the curing behavior and processing characteristics of rubber compounds. It's a crucial tool in the rubber industry for ensuring product quality and consistency.", link: "/Moving-Die-Rheometer" },

  { src: Facility55, title: "Ozone Test Chamber", description: "An Ozone Test Chamber is a specialized piece of equipment used to evaluate the resistance of materials, primarily rubber and elastomers, to ozone degradation." , link: "/Ozone-test-chamber"}
  ,
  { src: Facility66, title: "Muffle-furnance", description:"A muffle furnace is a type of laboratory oven used to heat materials to very high temperatures while isolating them from the direct contact of the heating element or any combustion products.", link: "/Muffle-furnance" },
];

const Inhousefacility = () => {

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
  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-text-content">
            <h1 className="hero-title">INHOUSE FACILITIES OF HOSES</h1>
            <button className="hero-button" onClick={handleScrollDown}>INHOUSE FACILITIES</button>
          </div>
        </div>
        <div className="hero-right">
          <img src={hoses} alt="Hero Background" className="hero-image" />
        </div>
      </div>
      <section className="gallery-section">
      
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.title} />
            <div className="overlay">
              <span className="overlay-text">{image.title}</span>
              <p>{image.description}</p>
              <Link to={image.link} className="nav-button">
              <BsArrowRightCircle className="nav-icon" />
            </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    <article className="inhouse-article">
	<figure className="inhouse-card">

          <div  className="inhouseproduct-section">
            <div className="inhouseproduct-content1"  data-aos="fade-down" 
           data-aos-offset="200" >
            <p>

Quality has always been the cornerstone of our continued excellence and superior customer value. To ensure that we consistently deliver high-quality hoses, we have invested in a comprehensive in-house testing facility equipped with sophisticated equipment. This facility allows us to conduct rigorous quality control checks throughout the manufacturing process, from raw material inspection to finished product testing.  Our equipment includes burst pressure testers to determine the maximum pressure a hose can withstand, pulse testers to simulate dynamic pressure fluctuations, and fatigue testers to assess durability under cyclic stresses. We also utilize abrasion testers to evaluate wear and tear resistance, chemical resistance testers to determine compatibility with various fluids, and temperature testers to assess performance at extreme temperatures. Additionally, dimensional testers ensure that hoses meet precise specifications. This comprehensive testing infrastructure allows us to identify and address potential issues early on, continuously improve product performance, meet and exceed industry standards, and provide customers with confidence in the quality, reliability, and safety of our hoses. By investing in this state-of-the-art testing facility, we demonstrate our commitment to delivering exceptional quality and exceeding customer expectations.</p>
            </div>
          </div>
 
	</figure>

	
	<figure className="inhouse-card">
	
          <div className="inhouseproduct-section">
            <div className="inhouseproduct-content"  data-aos="fade-up" 
           data-aos-offset="200" >
              
            <p>
          Quality has always been the cornerstone of our continued excellence and superior customer value.
          To ensure that we put-to-work multiple sophisticated equipment's such as:
        </p>
        <ul>
          <li
            
          >
            Moving Die Rheometer (MDR) used for testing rubber property, vulcanization characteristics.
          </li>
          <li
            
          >
            Burst Pressure Test Machine (Horizontal) with Hydraulic testing facility up to 150 bar pressure
            with temperature up to 90°C for Hydraulic testing.
          </li>
          <li
            
          >
            Ozone Test Chamber
          </li>
          <li
            
          >
            UTM -Tensile machine load 200kg to 5000kg
          </li>
          <li
            
          >
            Heating Ovens – Temp. up to 400°C
          </li>
          <li
            
          >
            Muffle Furnace – Temp. up to 1200°C
          </li>
        </ul>
            </div>
          </div>
        
	</figure>
	<figure className="inhouse-card">
	
       
	</figure>

</article>
 
   

    </div>
  );
};

export default Inhousefacility;
