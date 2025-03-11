import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import Marinewet1 from "../../Images/MSHvarNew1-removebg-preview.png";
import Marinewet2 from "../../Images/marinehoses.png";
import GetInTouch from "../GetInTouch.js";
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const ProductPage = () => {
  const siliconproducts = [
    {
      id: 1,
     
      image: Marinewet1,
      description: "Silicone-Polyester hoses </b>are designed specifically for use in demanding radiator, heater, and coolant transfer applications. Constructed from high-quality silicone reinforced with durable polyester fabric, these hoses offer excellent resilience and reliable performance in harsh conditions. This combination of versatility, durability, and adaptability to extreme environments makes Silicone-Polyester hoses a premium choice for automotive, industrial, and other applications requiring reliable coolant and heat transfer solutions.",
    },
    {
      id: 2,
      
      image: Marinewet2,
      description: "Description of Product 2. Crafted with premium materials for longevity.",
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="MARINE WET EXHAUST HOSES" isSubProduct={true} />
      <Parallax  strength={500} className="siliconhero-section">
  <section className="marinehero">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              {/* <div className="vertical-line" style={{marginLeft:"50px"}}>
                </div> */}
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 MARINE WET EXHAUST HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" , marginLeft:"-90px",fontWeight:"bold",fontSize:"24px"}}>Seaworthy Exhaust. Smooth Sailing.
                </h2>
                
             </div>
              </div>
  </div>
  </section>
</Parallax>


      <section className="siliconinfo-section marine-wet">
       
      </section>

      <section>
   <article  className="Product-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section" >
            <div className="product-content">
              <div style={{marginLeft:"-70px",}}>
              <img src={Marinewet1} alt={product.title} className="product-image silicon-img " />
              </div>
             
              <div className="silicon-article " style={{marginLeft:"20px",marginTop:"-40px"}}>
              <p style={{marginLeft:"20px",marginTop:"40px"}}>Sheetal Rubber provides high-quality Marine Wet
Exhaust Hoses for engine and generator systems
in in-board pleasure boats, ensuring durability and
top performance in marine environments.<b>Marine wet exhaust hoses</b> are critical components in marine vessels, playing vital role in safely and efficiently expelling exhaust gases from engines and generators.
              </p>
              </div>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card silicon-card2">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section">
            <div className="product-content" >
              <div style={{marginLeft:"-70px",}}>
              <img src={Marinewet2} alt={product.title} className="product-image silicon-img" style={{marginRight:"15px"}} />
              </div>
              
            <div className="silicon-article marin-content" style={{marginLeft:"20px",marginTop:"-20px"}}>
                <p style={{marginLeft:"20px",marginTop:"100px"}}>
                  <h3>Key Features and Benefits:</h3>
                <ul>
            <li>We are Manufacturing all hoses from only the highest quality rubber and reinforcement fabrics; they are designed to operate at temperatures up to + 180°C.


           </li>
            <li>Our High Temperature Wet Exhaust and Turbo hoses, will operate at temperatures up to 230°C.
            </li>
            <li>
           	We are tested our hoses and meet the requirements of SAE J2006 R3. Our EPDM hose meets the requirements of SAE J2006 R2.

           </li>
          </ul></p>
            </div>
            </div>
          </div>
        ))}
	</figure>
  

	
	
</article>
    </section>


    {/* <section>
   <article className="Product-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section">
            <div className="product-content">
             <div style={{marginLeft:"-45px",marginTop:"-100px"}}>
             <img src={Marinewet1} alt={product.title} className="product-image" style={{width:"900px",height:"600px",marginTop:"-50px"}} />
             </div>
           
             <div style={{marginLeft:"25px"}}>
             <p style={{marginTop:"-200px" }}> Sheetal Rubber provides high-quality Marine Wet
Exhaust Hoses for engine and generator systems
in in-board pleasure boats, ensuring durability and
top performance in marine environments.<b>Marine wet exhaust hoses</b> are critical components in marine vessels, playing a vital role in safely and efficiently expelling exhaust gases from engines and generators.</p>
             </div>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <div >
              <img src={Marinewet2} alt={product.title} className="product-image" style={{width:"300px",height:"260px" ,marginTop:"115px" }}   />
              </div>
              
             <div  style={{marginLeft:"20px"}}>
             <p style={{marginTop:"-20px" }}>
              <h3>Key Features and Benefits:</h3>
          <ul>
            <li>We are Manufacturing all hoses from only the highest quality rubber and reinforcement fabrics; they are designed to operate at temperatures up to + 180°C.


           </li>
            <li>Our High Temperature Wet Exhaust and Turbo hoses, will operate at temperatures up to 230°C.
            </li>
            <li>
           	We are tested our hoses and meet the requirements of SAE J2006 R3. Our EPDM hose meets the requirements of SAE J2006 R2.

           </li>
          </ul></p>
             </div>
            </div>
          </div>
        ))}
	</figure>
	

	
</article>
    </section> */}

    {/* <section className="background-section">
  <div className="background-overlay">
    
  </div>
</section> */}
<section className="getin-touch">
{/* <GetInTouch /> */}
  </section>
    </div>
  );
};

export default ProductPage;
