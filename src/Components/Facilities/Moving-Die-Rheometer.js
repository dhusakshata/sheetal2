import React from "react";
import { Parallax } from "react-parallax";
import "./SubInhouseFacility.css";
import Rheometer from "../../Images/Rheometer.png";

import { Link } from "react-router-dom"; 

const ProductPage = () => {
  

  return (
    <div className="subinhouse-page">
      {/* Hero Section */} 
  <section className="subinhousehero">
  <div className="subinhousehero-content">
     <div className="Product-hero-heading subinhouse-hero-heading  ">
              <div className="vertical-line" style={{marginLeft:"50px"}}>
                </div>
               <div className="subfacility-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px",textTransform:"uppercase" }}>
                 Moving Die Rheometer
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>Accelerate Innovation with Accurate MDR Data
                </h2>
                
             </div>
              </div>
  </div>
  </section>




    <section>
   <article className="subinhouse-article">
	<figure className="subinhouse-card">
 
          <div className="subinhouseproduct-section">
            <div className="inhouse-content">
              <img src={Rheometer}  className="inhouse-image" style={{width:"1200px",height:"500px",marginTop:"60px"}}/>
      
            </div>
          </div>
    
	</figure>

	
	<figure className="silicon-card">
	
          <div  className="siliconproduct-section" >
            <div className="inhouse-content1" >
            <ul style={{marginTop:"-80px"}}>
      <li>A Moving Die Rheometer (MDR) is essential in the rubber industry for measuring the dynamic curing characteristics of rubber and elastomers during vulcanization.</li>
      <li>
      The instrument works by placing a rubber sample in a closed cavity between two dies, one of which oscillates at a constant frequency and amplitude, subjecting the sample to shear deformation.
      </li>
      <li>
      As the rubber cures, the MDR records the resistance to oscillation, generating a torque-time curve that reveals key information, including minimum and maximum torque, scorch time (when curing begins), and cure time (when vulcanization is complete).
      </li>
      <li>
      MDRs are equipped with precise temperature control, replicating real-world curing conditions for accurate predictions of processing and end-use performance.


      </li>
     </ul>
            </div>
          </div>
      
	</figure>
  

	
	
</article>
    </section>
    <section className="background-section">
  <div className="background-overlay">
    
  </div>
</section>


 
    </div>
  );
};

export default ProductPage;
