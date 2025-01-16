
import React, { useState, useEffect } from "react";
import "./product2.css";
import Assemblyy11 from "../../Images/Assembly11.png";
import Assemblyy12 from "../../Images/Assembly2.png";
import { motion } from "framer-motion";
import GoBackbutton from "../Goback/goback.js";

const Assembly = ({children}) => {
  const images = [Assemblyy11, Assemblyy12]; // Images for the slideshow
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div className="product-page">
      {/* Heading with Bounce Animation */}
      
      <div>
            <GoBackbutton />
            {children}
          </div>
      <motion.div
        className="product-head"
        initial={{ opacity: 0, y: -100 }} // Start position (top)
        animate={{ opacity: 1, y: 0 }}    // End position (normal)
        transition={{ duration: 1 }}      // Duration of animation
      >
        <h1>ASSEMBLY HOSES</h1>
      </motion.div>
      {/* <hr className="product-hr"/> */}
      
      <div className="product-container">
        {/* Left Side: Image */}
      <motion.div
               className="content-image"
               initial={{ opacity: 0, x: -100 }} // Start position (left)
               animate={{ opacity: 1, x: 0 }} // End position (center)
               transition={{ duration: 1 }} // Duration of animation
             >
               <div className="image-slider">
                 <div className="slider-image-wrapper"style={{marginBottom:"-10px"}}>
                   <img
                     src={images[currentIndex]}
                     alt={`Slide ${currentIndex + 1}`}
                     className="slider-image"
                     
                   />
                 </div>
               </div>
             </motion.div>

        {/* Right Side: Info */}
        <motion.div
          className="content-info"
          initial={{ opacity: 0, x: 100 }} // Start position (right)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration: 1 }}      // Duration of animation
        >
<p> Sheetal Rubber provides flexible hoses with custom couplings for efficient media transfer, operating from -40°C to +140°C in sizes 6–75 mm.
          </p>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>
            A hose or multiple hoses connected to transfer media to or from a vehicle tank, portable tank, or storage receptacle.
            </li>
            <li>Sheetal Rubber can assemble flexible hoses and couplings into hose assemblies.</li>
            <li>Hose assembly applications include engine hoses, oil resistance, suction hoses, and radiators.</li>
            <li>We have an in-house crimping machine facility for hose assemblies.</li>
            
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Assembly;
