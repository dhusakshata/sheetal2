import React, { useState, useEffect } from "react";
import "./product2.css";
import { motion } from "framer-motion";
import Moulded11 from "../../Images/moulded11.png";
import Moulded12 from "../../Images/moulded12.png";
import Moulded13 from "../../Images/moulded13.png";
import Moulded14 from "../../Images/moulded14.png";
import GoBackbutton from "../Goback/goback.js";
const Moulded = ({ children }) => {
  const images = [Moulded11, Moulded12,Moulded13,Moulded14]; // Images for the slideshow
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
          <h1
              >MOULDED HOSES
            </h1>
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
            <div className="slider-image-wrapper">
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

<p>We specialize in high-performance,
custom-moulded parts for various
industries, using materials like SBR,
EPDM, PVC/NBR, Silicone, Neoprene,
and more.

        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>Sheetal Rubber offers a range of moulded parts.
</li>
          <li>Grommet, Gaskets, Bellows, Mountings, Rubber to metal bonded component and custom moulded parts.
</li>
          <li>
          Transfer and compression moulding presses available.

          </li>
          <li>Auto-weighing available from 0.5 grams to 5 kgs.</li>
         
        </ul>
        
        </p>
        </motion.div>
    </div>
  </div>
  );
};

export default Moulded;
