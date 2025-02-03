import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import Marinewet1 from "../../Images/Marine-wet1.png";
import Marinewet2 from "../../Images/marinehoses.png";

import { Link } from "react-router-dom"; 

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
      <Parallax  strength={500} className="siliconhero-section">
  <section className="marinehero">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="vertical-line">
                </div>
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 MARINE WET EXHAUST HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" ,fontWeight:"bold",fontSize:"24px"}}>Seaworthy Exhaust. Smooth Sailing.
                </h2>
                
             </div>
              </div>
  </div>
  </section>
</Parallax>


      <section className="siliconinfo-section marine-wet">
       
      </section>


    <section>
   <article>
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content">
              <img src={Marinewet1} alt={product.title} className="product-image" style={{width:"900px",height:"500px",marginBottom:"-100px"}} />
              <h3>{product.title}</h3>
              <p> Sheetal Rubber provides high-quality Marine Wet
Exhaust Hoses for engine and generator systems
in in-board pleasure boats, ensuring durability and
top performance in marine environments.<b>Marine wet exhaust hoses</b> are critical components in marine vessels, playing a vital role in safely and efficiently expelling exhaust gases from engines and generators. 1  These hoses are specifically designed to handle the unique challenges of the marine environment, including exposure to saltwater, extreme temperatures, and vibrations.</p>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <img src={Marinewet2} alt={product.title} className="product-image" style={{width:"500px",height:"400px"}}   />
              <h3>{product.title}</h3>
              <p>
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
        ))}
	</figure>
	
{/* 	
	<figure>
		<img src='https://unsplash.it/450/800?image=737' alt />
	</figure>
	<section>
		<div>
			<h2>#impoCSSible is nothing</h2>
			<p>You don´t need Javascript or #CSS processors either for almost 100% of what you want to do.</p>
		</div>
	</section>
	
	<figure>
		<img src='https://unsplash.it/450/800?image=870' alt />
	</figure>
	<section>
		<div>
			<h2>Idea from E.Bouças´s <a href='https://codepen.io/eduardoboucas/full/qdaOWv/'>pen</a></h2>
			<p>Without jQuery or Javascript, nor fixed position (bye IOs problems)</p>
		</div>
	</section>
	
	<figure>
		<img src='https://unsplash.it/450/800?image=743' alt />
	</figure>
	<section>
		<div>
			<h2>Images from unsplash.it</h2>
			<p>Because it´s the best for demos. Thanks, guys!</p>
		</div>
	</section>
	 */}
	
	
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
