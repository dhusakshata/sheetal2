

import React, { useState, useEffect } from "react";
import "./product2.css";
import Silicon11 from "../../Images/silicon11.png";
import Silicon12 from "../../Images/silicon12.png";
import { motion } from "framer-motion";
import GoBackbutton from "../Goback/goback.js";

function SiliconPolyester({ children }) {
  const images = [Silicon11, Silicon12]; // Images for the slideshow
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
      <div>
        <GoBackbutton />
        {children}
      </div>
      {/* Heading with Bounce Animation */}
      <motion.div
        className="product-head"
        initial={{ opacity: 0, y: -100 }} // Start position (top)
        animate={{ opacity: 1, y: 0 }} // End position (normal)
        transition={{ duration: 1 }} // Duration of animation
      >
        <h1>SILICONE-POLYESTER HOSES</h1>
      </motion.div>
      <div className="product-container">
        {/* Left Side: Auto Image Slider */}
        <motion.div
          className="content-image"
          initial={{ opacity: 0, x: -100 }} // Start position (left)
          animate={{ opacity: 1, x: 0 }} // End position (center)
          transition={{ duration: 1 }} // Duration of animation
        >
          <div className="image-slider">
            <div className="slider-image-wrapper silicone-slider" style={{marginTop:"-90px"}}>
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
          animate={{ opacity: 1, x: 0 }} // End position (center)
          transition={{ duration: 1 }} // Duration of animation
        >
          <p>
          <b>Silicone-Polyester hoses </b>are designed specifically for use in demanding radiator, heater, and coolant transfer applications. Constructed from high-quality silicone reinforced with durable polyester fabric, these hoses offer excellent resilience and reliable performance in harsh conditions. This combination of versatility, durability, and adaptability to extreme environments makes Silicone-Polyester hoses a premium choice for automotive, industrial, and other applications requiring reliable coolant and heat transfer solutions.
          </p>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>
              Our Silicone Hoses are having good resistance to weather and ozone and resist
              deterioration from coolant and heat transfer.
            </li>
            <li>
              Silicone Polyester Hoses having wide temp range which operates from -50°C to 180°C.
            </li>
            <li>It prevents deterioration caused by fluids and heat.</li>
            <li>Our Silicone Hoses meet requirements of SAEJ20 class A.</li>
            <li>
              We offer with the options of Fluorosilicon for oil/fuel and FKM / Viton liner for
              diesel combustion bye products / exhaust gas recycle.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default SiliconPolyester;
