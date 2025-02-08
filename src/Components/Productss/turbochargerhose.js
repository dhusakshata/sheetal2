import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import Turbocharger11 from "../../Images/turbocharger11.png";
import Turbocharger12 from "../../Images/turbocharger12.png";

import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
import { Link } from "react-router-dom"; 

const ProductPage = () => {
  const siliconproducts = [
    {
      id: 1,
     
      image: Turbocharger11,
      
    },
    {
      id: 2,
      
      image: Turbocharger12,
      
    },
    
  ]; 

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage=" TURBOCHARGER AND CAC HOSES" isSubProduct={true} />
  <section className="turbochargerhero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="vertical-line">
              </div>
                
                
              
      
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 TURBOCHARGER AND CAC HOSES
                </h1>
               <h2  style={{textAlign:"left",marginLeft:"-80px",fontWeight:"bold",fontSize:"24px"}}>Turbocharged Power. Connected Right.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section turbocharger">
       
      </section>


    <section>
   <article className="Product-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section">
            <div className="product-content">
              <img src={Turbocharger11} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p><b>Turbocharger hoses</b> are essential components in the automotive industry, particularly for vehicles equipped with turbocharged engines. These flexible tubes play a crucial role in connecting the turbocharger to the engine's intake manifold. Their primary function is to efficiently transport compressed air from the turbocharger to the engine's cylinders, enhancing performance and fuel economy.Engineered for high-performance connections in turbocharger and
            charge air cooler systems, ensuring durability in demanding automotive
            and industrial applications.
       </p>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <div><img src={Turbocharger12} alt={product.title} className="product-image" style={{marginRight:"15px",marginTop:"50px"}} /></div>
             
              <div style={{marginLeft:"20px"}}>
              <p style={{marginLeft:"20px",marginTop:"-30px"}}>
              <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Design to operate at Temperature range: -50°C to + 230°C.
           </li>
            <li>Our turbocharger hoses meets/exceeds SAEJ20 Class A specifications.
            </li>
            <li>Our hoses are specially engineered for use in turbocharger and intake systems across a variety of vehicles, including trucks, buses, passenger cars, and railway engines, as well as industrial applications.
            </li>
            <li>These hoses are designed to provide both rigid and flexible connections, ensuring reliable performance in demanding environments such as generators and other heavy-duty machinery.
            </li>
           
          </ul>
        </p>
        </div>
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
