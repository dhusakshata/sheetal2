import React from "react";
import { Parallax } from "react-parallax";
import "./SubInhouseFacility.css";
import muffle from "../../Images/muffle_furnace-removebg-preview.png";
import { Link } from "react-router-dom"; 

const ProductPage = () => {
  

  return (
    <div className="subinhouse-page">
      {/* Hero Section */}
      <Parallax  strength={500} className="subinhousehero-section">
  <section className="muffle-hero">
  <div className="subinhousehero-content">
     <div className="Product-hero-heading subinhouse-hero-heading  ">
              <div className="vertical-line" style={{marginLeft:"50px"}}>
         </div>
               <div className="subfacility-herodata">
                
                 <h1 style={{textAlign:"left",marginLeft:"30px",textTransform:"uppercase" }}>
                 Muffle Furnace
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>Muffle Furnace: Engineered for Excellence
                </h2>
                
             </div>
              </div>
  </div>
  </section>
</Parallax>


     

    <section>
   <article className="muffle-article">
	<figure className="subinhouse-card">
 
          <div className="subinhouseproduct-section">
            <div className="inhouse-content">
              <img src={muffle}  className="facility-image" style={{maxWidth:"800px",width:"100%",height:"500px"}}/>
      
            </div>
          </div>
    
	</figure>

	
	<figure className="silicon-card subinhouse-card">
	
          <div  className="siliconproduct-section" >
            <div className="inhouse-content1 inhouse-content11" >
            <ul style={{color:"white"}} className="inhouse-ul">
            <li>
      A Muffle Furnace helps us for high-temperature testing, heating, and material treatment processes.
      </li>
      <li>The furnace provides a controlled, uniform heat environment, isolating materials from direct flame exposure for precise temperature application.</li>
      <li>It is essential for applications like ash content analysis, material decomposition, and heat treatment.</li>
      <li>The furnace allows us to evaluate the thermal resistance, durability, and purity of materials.</li>
      <li>This ensures that our rubber and silicone hoses meet the stringent quality standards required for industries such as automotive, aerospace, and industrial applications.</li>
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
