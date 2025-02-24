import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import FuelTube1 from "../../Images/Fuel-Tubes11.png";
import GetInTouch from "../GetInTouch.js";
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const ProductPage = () => {
  const siliconproducts = [
    {
      id: 1,
     
      image: FuelTube1,
      
    },
    {
      id: 2,
      
      image: FuelTube1,
      
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="FUEL HOSES" isSubProduct={true} />
  <section className="fuelhero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              {/* <div className="vertical-line" style={{marginLeft:"50px"}}>
                </div> */}
               <div className="subproduct-herodata">
                
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 FUEL HOSES
                </h1>
               <h2  style={{textAlign:"left",margin:"30px" ,marginLeft:"-150px",fontWeight:"bold",fontSize:"24px"}}>The Backbone of Fuel Systems.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section fuel">
       
      </section>


    <section>
   <article className="Product-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content">
            <div style={{marginLeft:"-80px",marginTop:"-80px"}}>  <img src={FuelTube1} alt={product.title} className="product-image" /></div>
              <h3>{product.title}</h3>
              <p style={{width:"500px"}}>
              Engineered for safe and efficient fluid
transfer in automotive and industrial
systems, with inner diameters ranging from
2 mm to 45 mm.
       </p>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <img src={FuelTube1} alt={product.title} className="product-image" style={{marginRight:"15px"}} />
             
              <p>
              <h3>Key Features and Benefits:</h3>
        <ul>
          <li>Sheetal Rubber offers single or double layer for automotive to meet requirement.
</li>
          <li>All fuel tubes are very flexible to fit and get shape as per design.
</li>
          <li>
          We offer all fuel tubes in multiple colors.


          </li>
          <li>Our fuel flow tubes to help minimize pressure drop.

          </li>
          <li>
          We also offer fuel tube with sleeves for heat and abrasion resistant.
          </li>
          
        </ul>
        </p>
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
    {/* <section className="background-section">
  <div className="background-overlay">
    
  </div>
</section> */}
<section className="getin-touch">
<GetInTouch />
  </section>
 
    </div>
  );
};

export default ProductPage;
