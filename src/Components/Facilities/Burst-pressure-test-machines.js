import React from "react";
import { Parallax } from "react-parallax";
import "./SubInhouseFacility.css";
import Burst from "../../Images/burst_pressure.png";


const ProductPage = () => {
  

  return (
    <div className="subinhouse-page">
      {/* Hero Section */}
     
  <section className="BurstPressure-hero">
  <div className="subinhousehero-content">
     <div className="Product-hero-heading subinhouse-hero-heading  ">
              <div className="vertical-line" style={{marginLeft:"50px"}}>
                
                </div>
               <div className="subfacility-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px",textTransform:"uppercase" }}>
                 Burst Pressure Test Machine
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>Ensuring Safety, Exceeding Expectations
                </h2>
                
             </div>
              </div>
  </div>
  </section>

    <section>
   <article className="BurstPressure-article">
	<figure className="subinhouse-card ">
 
          <div className="subinhouseproduct-section">
            <div className="product-content">
              <img src={Burst}  className="facility-image" style={{width:"500px",marginTop:"-20px"}}/>
      
            </div>
          </div>
    
	</figure>

	
	<figure className="silicon-card subinhouse-card">
	
          <div  className="siliconproduct-section" >
            <div className="inhouse-content1 inhouse-content11" >
            <ul style={{marginTop:"-80px",color:"white"}}>
            <li>Our Burst Pressure Test Machine (Horizontal) with Hydraulic Testing Facility ensures that silicone and rubber hoses meet high-pressure performance requirements.</li>
        <li>This service verifies the strength, flexibility, and endurance of hoses under extreme hydraulic conditions.</li>
        <li>The horizontal configuration allows for efficient handling of long hoses during testing.</li>
        <li>The hydraulic system delivers precise and consistent pressure testing for accurate results.</li>
        <li>The test ensures that silicone and rubber hoses used in critical industries (automotive, medical, industrial) are durable, safe, and compliant with stringent quality standards.</li>
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
