import React from "react";
import "./product2.css";
import { motion } from "framer-motion";
import Organic1 from "../../Images/organic-rubber1.png";
import GoBackbutton from "../Goback/goback.js";
const organic = ({ children }) => {
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
            <h1>
          ORGANIC RUBBER
          HOSES</h1>
          </motion.div>
          {/* <hr className="product-hr"/>
           */}
          <div className="product-container">
            {/* Left Side: Image */}
            <motion.div
              className="content-image"
              initial={{ opacity: 0, x: -100 }} // Start position (left)
              animate={{ opacity: 1, x: 0 }}    // End position (center)
              transition={{ duration:1 }}      // Duration of animation
            >
<img src={Organic1} alt="Assembly Hoses" style={{marginTop:"-120px"}} />
</motion.div>


        {/* Right Side: Info */}
        <motion.div
          className="content-info"
          initial={{ opacity: 0, x: 100 }} // Start position (right)
          animate={{ opacity: 1, x: 0 }}    // End position (center)
          transition={{ duration: 1 }}      // Duration of animation
        >
         <p
          >
          Designed for low-temperature air, water, and fuel
           transfer, with material options like SBR,
          PVC/NBR, Neoprene, Vamac, and NBR for
           specific needs.
          
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>The reinforcement fabrics used in our hoses are typically made from Polyester and Nylon, with Kevlar/Aramid sometimes used for higher temperatures or based on customer specifications.</li>
            <li>The materials for the inner tube and outer cover can vary, such as inner nitrile and outer neoprene, available in both reinforced and non-reinforced options.
            </li>
            <li>We offer the option of developing non-reinforced extruded tubes for applications where service pressure requirements are very low.
            </li>
            <li>Our hoses are customizable to meet specific customer needs, with varying reinforcement and material combinations based on performance requirements.
          </li>
          
          </ul>
      
          </p>
         </motion.div>
      </div>
    </div>
  );
  
};

export default organic;
