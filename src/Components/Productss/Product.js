

import React, { useEffect, useRef, useState } from "react";
import "./Product.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
import { Link } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css";

import Silicon from "../../Images/Silicon1.png"
import Turbocharger from "../../Images/Turbo-charger1.png";
import Marine from "../../Images/Marine-wet1.png";
import EPDM from "../../Images/EPDM-rubber1.png";
import Organic from "../../Images/organic-rubber1.png";
import Assembly from "../../Images/Assembly-rubber1.png";
import Wired from "../../Images/wired-reinforced1.png";
import FuelTube from "../../Images/Fuel-Tubes1.png";
import Moulded from "../../Images/Moulded1.png";

const applyParallax = () => {
  const parallaxSections = document.querySelectorAll(".parallax-section");
  const scrollTop = window.pageYOffset;

  parallaxSections.forEach((section) => {
    const speed = section.dataset.speed || 0.5; // Adjust speed via data attribute
    section.style.backgroundPositionY = `${scrollTop * speed}px`;
  });
};

const ProductHero = () => {

  const products = [
    { id: 1, name: "Silicone Polyester Hoses", image: Silicon, link: "/siliconpolyester", description: "Silicone-Polyester hoses are designed specifically for use in demanding radiator, heater,and coolant transfer applications." },
    { id: 2, name: "Turbocharger Hoses", image: Turbocharger, link: "/turbochargerhose", description: "  Engineered for high-performance connections in turbocharger and charge air cooler systems,ensuring durability in demanding automotive and industrial applications." },
    { id: 3, name: "Marine Wet Exhaust Hoses", image: Marine, link: "/marinewethose", description: "  Sheetal Rubber provides high-quality Marine Wet Exhaust Hoses for engine and generator systems." },
    { id: 4, name: "EPDM Rubber Hoses", image: EPDM, link: "/epdm", description: "High-performance hoses for radiator and cooling systems, built to DIN73411 & SAEJ20 Class D standards for durability, flexibility, and heat resistance." },
    { id: 5, name: "Organic Rubber Hoses", image: Organic, link: "/organic", description: "Designed for low-temperature air, water, and fuel transfer, with material options like SBR,PVC/NBR, Neoprene, Vamac, and NBR for specific needs." },
    { id: 6, name: "Assembly Hoses", image: Assembly, link: "/Assembly", description: "Sheetal Rubber provides flexible hoses with custom couplings for efficient media transfer, operating from -40°C to +140°C in sizes 6–75 mm." },
    { id: 7, name: "Wired Reinforced Hoses", image: Wired, link: "/wired", description: "Engineered for reliability in demanding environments, with a temp.range of-40°C to +140°C and sizes from 20 mm to200 mm." },
    { id: 8, name: "Fuel Tube Hoses", image: FuelTube, link: "/Fueltube", description: " Engineered for safe and efficient fluid transfer in automotive & industrial systems,with inner diameter rang from 20 mm to 45mm." },
    { id: 9, name: "Moulded Hoses", image: Moulded, link: "/moulded", description: "We specialize in high-performance,custom-moulded parts for various industries, using materials like SBR, EPDM, PVC/NBR, Silicone, Neoprene.." },
  ];
  

  useEffect(() => {
    window.addEventListener("scroll", applyParallax);
    return () => window.removeEventListener("scroll", applyParallax);
  }, []);

//Annimation of About-info
useEffect(() => {
  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    once: true, // Trigger animation only once
  });
}, []);
//


  return (
    <div className="Product-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="Products" />
      <section className=" Product-hero" >
        <div className="Product-hero-content">
          {/* Left Section */}
         
          <div className="Product-hero-heading">
          <div className="Product-vertical-line">
            </div>

           <div className="product-herodata">
           <h1 style={{textAlign:"left",marginLeft:"30px"}}>
           HIGH PERFORMANCE PRODUCTS
            </h1>
           <h2  style={{textAlign:"left",margin:"20px", marginLeft:"32px" ,fontWeight:"bold",fontSize:"24px"}}>Flexible Solutions. Lasting Performance.
            </h2>
            
            <p  style={{textAlign:"left",fontWeight:"bold",fontSize:"16px",width:"700px",marginLeft:"30px",marginTop:"-20px"}} >
  
  At Sheetal Rubber Products, we specialize in a comprehensive range of high-performance rubber solutions, including 
     <b>
    <Link to="/siliconpolyester"> Silicone Polyester Hoses</Link>, 
    <Link to="/turbochargerhose">Turbocharger Hoses</Link>, 
    <Link to="/marinewethose">Marine Wet Exhaust Hoses</Link>, 
    <Link to="/epdm">EPDM Rubber Hoses</Link>, 
    <Link to="/organic">Organic Rubber Hoses</Link>, 
    <Link to="/assembly">Assembly Hoses</Link>, 
    <Link to="/wired">Wire Reinforced Hoses</Link>, 
    <Link to="/fueltube">Fuel Hoses</Link>, 
    <Link to="/moulded">Moulded Hoses </Link>.
  </b> 
 
</p>


           </div>
          </div>

          
        </div>
      </section>


      <section className="Product-info">
        <div className="Product-info-container">
        

          {/* Right Info Section */}
          <div className="Product-info-text"
           data-aos="fade-down" 
           data-aos-offset="200" 
          >
           <div style={{borderBottom: "2px dashed #ffff",margin: "20px 0", width: "600px"}}>
             <h1 style={{ color: "white",fontWeight:"bold",fontSize:"2.5rem", margin: "10px 0", }}>
            PRODUCT | APPLICATIONS
            </h1></div>
            <p>
              We specialize in
              manufacturing a full range of low-pressure hoses, including
              platinum silicone-lined, FMK-lined fuel cell hoses,
              flame-retardant hoses, and various moulded components. Our
              commitment to product expertise, engineering excellence, rigorous
              testing, and strict quality controls has established us as a
              preferred partner for major manufacturers in India and a favored
              exporter internationally.
            </p>
          </div>
        </div>
      </section>

      <section className="universal">

</section>

      <section className="productpage-section2"id="application-2">
    <div className="productpage">
    <div className="section-content ">
      <div className="trusted-product">
        <h2>TRUSTED BY CLIENTS</h2>
        <p>
          At Sheetal Rubber Products, we specialize in a comprehensive range of high-performance rubber solutions, including:
        </p>
        <p>
          <b>
            <Link to="/siliconpolyester"> Silicone Polyester Hoses</Link>, 
            <Link to="/turbochargerhose">Turbocharger Hoses</Link>, 
            <Link to="/marinewethose">Marine Wet Exhaust Hoses</Link>, 
            <Link to="/epdm">EPDM Rubber Hoses</Link>, 
            <Link to="/organic">Organic Rubber Hoses</Link>, 
            <Link to="/assembly">Assembly Hoses</Link>, 
            <Link to="/wired">Wire Reinforced Hoses</Link>, 
            <Link to="/fueltube">Fuel Hoses</Link>, 
            <Link to="/moulded">Moulded Hoses </Link>.
          </b>
        </p>
        
      </div>
    </div>
      </div>
  </section> 
  
    
  <section className="Product-gallery">
  <div className="Product-gallery-container">
    {/* Grid Gallery */}
    <div className="gallery-grid">
      {products.map((product) => (
       <div>
            <h3 className="gallery-heading">{product.name}</h3>
         <div key={product.id} className="gallery-item">
      
          <img src={product.image} alt={product.name} />
          <div className="overlay">
           
            <p>{product.description}</p>
            <Link to={product.link} className="nav-button">
              <BsArrowRightCircle className="nav-icon" />
            </Link>
          </div>
        </div>
        </div>
      ))}
    </div>
  </div>
</section>


   
  
    </div>
  );
};

export default ProductHero;
