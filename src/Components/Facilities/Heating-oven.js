import React from "react";
import { Parallax } from "react-parallax";
import "./SubInhouseFacility.css";
import Heatingoven from "../../Images/heating oven.png";
import { Link } from "react-router-dom"; 

const ProductPage = () => {
  

  return (
    <div className="subinhouse-page">
      {/* Hero Section */}
      
  <section className="heating-hero">
  <div className="subinhousehero-content">
     <div className="Product-hero-heading subinhouse-hero-heading  ">
              <div className="vertical-line" style={{marginLeft:"50px"}}>
               
                </div>
               <div className="subfacility-herodata">
                 
               <h1 style={{textAlign:"left",marginLeft:"30px",textTransform:"uppercase" }}>
                 Heating Ovens
                </h1>
                
              
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>Precision Heating, Superior Results
                </h2>
                
             </div>
              </div>
  </div>
  </section>


     

    <section>
   <article className="heatingoven-article">
	<figure className="subinhouse-card">
 
          <div className="subinhouseproduct-section">
            <div className="product-content">
              <img src={Heatingoven}  className="facility-image" style={{maxWidth:"900px",height:"500px",marginTop:"-150px"}}/>
      
            </div>
          </div>
    
	</figure>

	
	<figure className="silicon-card">
	
          <div  className="siliconproduct-section" >
            <div className="inhouse-content2" >
            <ul style={{marginTop:"-150px"}}>
            <li>Those Heating Ovens are essential for curing, drying, and preheating for our rubber and silicone hoses during production process.</li>
      <li>This procedure ensures precise temperature control, enhancing the strength, flexibility, and durability to our hoses.</li>
      <li>The controlled heating environment provides uniform heat distribution, ensuring consistent quality to all hoses.</li>
      <li>This process guarantees that silicone and rubber hoses meet the required standards for industrial, automotive, and specialized uses.</li>
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
