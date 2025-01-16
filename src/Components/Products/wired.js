import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./product2.css";
import Wired1 from "../../Images/wire.png";
import Wired11 from "../../Images/wired11.png";
import GoBackbutton from "../Goback/goback.js";


const Wired = ({children}) => {

  const images = [Wired1, Wired11]; // Images for the slideshow
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
        < h1 >WIRE REINFORCED
          HOSES</h1>
      </motion.div>
      {/* <hr className="product-hr"/> */}
      
      <div className="product-container" style={{gap:"10px"}}>
        {/* Left Side: Image */}
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
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration: 1 }}      // Duration of animation
        >
         <p>
        Engineered for reliability in demanding
environments, with a temperature range of
-40°C to +140°C and sizes from 20 mm to
200 mm.
      
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>The suction hose is designed to maintain vacuum integrity for the transfer of fluids and air.
</li>
          <li>The air filter hose is durable and ensures clean air intake for the engine.
</li>
          <li>The flexible hose is versatile, making it suitable for the transfer of both fluids and gases.

          </li>
          <li>These hoses have a good bend radius, for trickier connections, and is resistant to anti-freeze and corrosion inhibitors.
          </li>
          <li>	It is useful for air cleaner applications in automotive filters.</li>
        </ul>
        
        </p>
       
        
      </motion.div>
    </div>
  </div>
  );
};

export default Wired;
