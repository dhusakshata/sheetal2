import React from "react";
import { Parallax } from "react-parallax";
import "./SubInhouseFacility.css";
import OzenTest from "../../Images/Ozone-Test-Chamber2-removebg-preview.png";
import { Link } from "react-router-dom"; 

const ProductPage = () => {
  

  return (
    <div className="subinhouse-page">
      {/* Hero Section */}
   
  <section className="Ozone-hero">
  <div className="subinhousehero-content">
     <div className="Product-hero-heading subinhouse-hero-heading  ">
              <div className="vertical-line" style={{marginLeft:"50px"}}>
               
                </div>
               <div className="subfacility-herodata">
                 
               <h1 style={{textAlign:"left",marginLeft:"30px",textTransform:"uppercase" }}>
                 Ozone Test Chamber
                </h1>
                
              
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>Accelerated Aging, Real-World Results
                </h2>
                
             </div>
              </div>
  </div>
  </section>



     

    <section>
   <article className="Ozone-article">
	<figure className="subinhouse-card">
 
          <div className="subinhouseproduct-section">
            <div className="inhouse-content">
              <img src={OzenTest}  className="facility-image" style={{width:"500px",height:"400px",marginTop:"-150px"}}/>
      
            </div>
          </div>
    
	</figure>

	
	<figure className="silicon-card">
	
          <div  className="siliconproduct-section" >
            <div className="inhouse-content1" >
            <ul style={{marginTop:"-150px"}}>
            <li>We have Ozone Test Chamber that is a specialized facility designed to evaluate the ozone resistance of rubber and silicone products.</li>
      <li>The chamber simulates high-ozone environments to test the durability of hoses, seals, gaskets, and other components exposed to ozone.</li>
      <li>This machine helps us to identify cracks, brittleness, or other forms of degradation in our rubber and silicone products.</li>
      <li>This service ensures that our rubber and silicone hoses meet industry standards for longevity and performance.</li>
      <li>It is particularly essential for applications in automotive, industrial, and outdoor environments where exposure to ozone is common.</li>
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
