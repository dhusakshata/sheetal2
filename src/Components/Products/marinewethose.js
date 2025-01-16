import React from "react";
import { motion } from "framer-motion";
import "./product2.css";
import Marinewet1 from "../../Images/Marine-wet1.png";
import GoBackbutton from "../Goback/goback.js";
function Marine({children}) {
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
        > MARINE WET
        EXHAUST HOSES </h1>
</motion.div>
      {/* <hr className="product-hr"/> */}
      
      <div className="product-container"
      >
        {/* Left Side: Image */}
        <motion.div
          className="content-image"
          initial={{ opacity: 0, x: -100 }} // Start position (left)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration:1 }}      // Duration of animation
        >
          <img src={Marinewet1} alt="Assembly Hoses" 
          style={{marginTop:"-70px"}}
          />
        </motion.div>
    
 {/* Right Side: Info */}
        <motion.div
          className="content-info"
          initial={{ opacity: 0, x: 100 }} // Start position (right)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration: 1 }}      // Duration of animation
        >
          <p>
          Sheetal Rubber provides high-quality Marine Wet
Exhaust Hoses for engine and generator systems
in in-board pleasure boats, ensuring durability and
top performance in marine environments.

          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>We are Manufacturing all hoses from only the highest quality rubber and reinforcement fabrics; they are designed to operate at temperatures up to + 180°C. 

           </li>
            <li>Our High Temperature Wet Exhaust and Turbo hoses, will operate at temperatures up to 230°C.
            </li>
            <li>
           	We are tested our hoses and meet the requirements of SAE J2006 R3. Our EPDM hose meets the requirements of SAE J2006 R2.

           </li>
          </ul>
          </p>
       </motion.div>
        
          </div>
        </div>
     
  );
}

export default Marine;
