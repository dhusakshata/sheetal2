import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./product2.css";
import EPDM1 from "../../Images/epdm11.png";
import EPDM2 from "../../Images/epdm12.png";

import GoBackbutton from "../Goback/goback.js";

const Epdm = ({ children }) => {
  const images = [EPDM1, EPDM2]; // Images for the slideshow
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
              animate={{ opacity: 1, y: 0 }}    // End position (normal)
              transition={{ duration: 1 }}      // Duration of animation
            >
              <h1>EPDM RUBBER HOSES</h1>
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
                                <div className="slider-image-wrapper"style={{marginTop:"-70px"}}>
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
                    className="content-info epdm-info"
                           initial={{ opacity: 0, x: 100 }} // Start position (right)
                           animate={{ opacity: 1, x: 0 }}    // End position (center)
                           transition={{ duration: 1 }}      // Duration of animation
                         >
   <p>
  
High-performance hoses for radiator and cooling systems, built to DIN73411 & SAEJ20 Class D standards for durability, flexibility, and heat resistance.

</p>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Available in reinforcement as well as non-reinforcement options.
           </li>
            <li>Nylon/polyester reinforcement gives flexibility and aramid / Kevlar gives high strength.
            </li>
            <li>Our EPDM hoses are designed to operate continuously in temperatures ranging from -30°C to 140°C.
            </li>
            <li>Also available in peroxide-cured hoses.</li>
            
          </ul>
            </motion.div>
          </div>
          
          
        </div>
      
  );
};

export default Epdm;
