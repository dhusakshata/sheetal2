import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightCircle } from "react-icons/bs";
import "./facilities.css";
import { Link } from "react-router-dom";
import manufacturinghoses from "../../Images/hoses9.avif";

import Facility4 from "../../Images/hot-feed-rubber-extruder-machine-removebg-preview.png"; 
import Facility5 from "../../Images/coextrusion.png"; 
import Facility6 from "../../Images/cold-feed.jpg"; 
import Facility7 from "../../Images/Auto-clave-vulcanizer.jpeg"; 
import Facility8 from "../../Images/25-litres-rubber-dispersion-kneader-machine-250x250.jpg"; 
import Facility9 from "../../Images/stock blender.jpg"; 

import Facility10 from "../../Images/3 role.jpeg"; 
import Facility11 from "../../Images/Compression Molding.jpg"; 
import Facility12 from "../../Images/uni-drive-rubber-mixing-mill-12x30-removebg-preview-1.webp"; 
import Facility13 from "../../Images/knitting2.png"; 


const images = [
  { src: Facility4, 
    title: "Hot Feed Extruder",
    description:"A Hot Feed Extruder processes materials that are already preheated or partially molten before entering the extrusion screw. ",
     link: "/hot-cold-feed"
     },

  { src: Facility5, title: "Co-Extrusion Extruder",description:"A co-extrusion extruder combines two or more different polymer materials into a single, multi-layered product. ", link: "/hot-cold-feed" },

  { src: Facility6, title: "Cold Feed Extruder",
    description:"A cold feed extruder processes materials at room temperature, feeding them directly into the screw without preheating.", link: "/hot-cold-feed"
  },

  { src: Facility7, title: "Auto-Clave-Vulcanizer",description:"An Autoclave-Vulcanizer is a specialized piece of equipment used in the rubber industry to cure rubber products.", link: "/Auto-clave-vulcanizer" },

  { src: Facility8, title: "Dispersion-Kneader",description:"A Dispersion Kneader is a high-shear mixing equipment crucial in the rubber and polymer industries.", link: "/Dispersion-kneader"}
  ,
  { src: Facility9, title: "Stock Blender",description:"A Stock Blender is a large-scale mixing equipment used in the rubber and plastics industries."},

  { src: Facility10, title: "3 Role Calendaring Machine",description:"A Three Roll Calendering Machine is a crucial piece of equipment in the rubber and plastics industries.", link: "/3-role-calendaring-machine"},

  { src: Facility11, title: "Compression Moulding",description:"Compression moulding shapes materials by applying heat and pressure within a closed mold. ", link: "/Compression-transfer-molding"},

  { src: Facility12, title: "Rubber Mixing Mill", description:"A Rubber Mixing Mill is a crucial piece of equipment in the rubber industry.", link: "/Rubber-mixing-mill"},

  { src: Facility13, title: "Knitting Machine", description:"A knitting machine is an automated device that creates fabric by interlooping yarn.", link: "/Knitting-machine"},

 
];

const Manufacturing = () => {

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-text-content">
            <h1 className="hero-title">MANUFACTURING FACILITIES OF HOSES</h1>
            <button className="hero-button" onClick={handleScrollDown}>MANUFACTURING FACILITIES</button>
          </div>
        </div>
        <div className="hero-right">
          <img src={manufacturinghoses} alt="Hero Background" className="hero-image" />
        </div>
      </div>
      
      <section className="image-gallery-section">
  <div className="image-gallery-container">
    {images.map((image, index) => (
      <div key={index} className="image-gallery-item">
        <img src={image.src} alt={image.title} />
        <div className="image-overlay">
          <p style={{color:"white" ,width:"200px",textAlign:"left"}}>{image.description}</p>
          <Link to={image.link} className="nav-button">
              <BsArrowRightCircle className="nav-icon" />
            </Link>
        </div>
      </div>
    ))}
  </div>
</section>

    <article className="manufacturing-article">
      
	<figure className="manufacturing-card">

          <div  className="manufacturing-section">
            <div className="manufacturing-content1">
            <p>
            Manufacturing facilities rely heavily on hoses for various operations, from transporting fluids and gases to powering machinery. These hoses come in diverse types, such as hydraulic hoses for high-pressure systems, pneumatic hoses for compressed air, chemical hoses for corrosive substances, and steam hoses for heating processes. Selecting the right hose is crucial, considering factors like fluid compatibility, pressure rating, temperature tolerance, flexibility, abrasion resistance, and chemical resistance. Proper maintenance, including regular inspections and pressure testing, is essential to ensure the safe and reliable operation of hoses within the manufacturing environment.</p>
            </div>
          </div>
 
	</figure>

	
	<figure className="manufacturing-card">
	
          <div className="manufacturing-section">
            <div className="manufacturing-content" >
            <p 
        >
        To help our customers with high-performance products and a cost advantage, we continually strive to improve our manufacturing and business processes, such as:
        </p>
        <ul>
  <li
    
  >
    Cold Feed Vended Extruders
  </li>
 
  <li
    
  >
    Outer: Neoprene (weather/abrasion resistant)
  </li>
  <li
    
  >
    Hot Feed Extruders
  </li>
  <li
   
  >
    Auto Clave Vulcanizer (Quick Lock Type)
  </li>
  <li
    
  >
    Dispersion Kneader
  </li>
  <li
    
  >
    3 Role Calendaring Machine
  </li>
  <li
    >
    Compression Transfer Moulding
  </li>
 
  <li
    
  >
    Rubber Mixing Mills
  </li>
  <li
    
  >
    Knitting Machines
  </li>
  <li
  >
    Braiding Machines
  </li>
  <li
    
  >
    Other Conventional Machines
  </li>
</ul>
            </div>
          </div>
        
	</figure>
	<figure className="manufacturing-card">
	

	</figure>

</article>

    </div>
  );
};

export default Manufacturing;
