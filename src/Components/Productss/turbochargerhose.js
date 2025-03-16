import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import GetInTouch from "../GetInTouch.js";
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
              {/* <div className="vertical-line" style={{marginLeft:"50px"}}>
              </div> */}
                
                
              
      
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
   <article  className="Product-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section" >
            <div className="product-content">
              <div>
              <img src={Turbocharger11} alt={product.title} className="product-image  turbo-img" />
              </div>
             
              <div className="silicon-article ">
              <p style={{marginLeft:"20px",marginTop:"80px"}}><b>Turbocharger hoses</b> are essential components in the automotive industry, particularly for vehicles equipped with turbocharged engines. These flexible tubes play a crucial role in connecting the turbocharger to the engine's intake manifold. Their primary function is to efficiently transport compressed air from the turbocharger to the engine's cylinders, enhancing performance and fuel economy.Engineered for high-performance connections in turbocharger and
            charge air cooler systems, ensuring durability in demanding automotive
            and industrial applications.
              </p>

           
              </div>
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section">
            <div className="product-content" >
              <div style={{marginLeft:"-70px",}}>
              <img src={ Turbocharger12} alt={product.title} className="product-image  turbo-img" style={{marginRight:"15px"}} />
              </div>
              
            <div className="silicon-article marin-content" style={{marginLeft:"20px",marginTop:"-20px"}}>
                <p style={{marginLeft:"20px",marginTop:"80px"}}><h3>Key Features and Benefits:</h3>
                <ul>
            <li>Design to operate at Temperature range: -50°C to + 230°C.
           </li>
            <li>Our turbocharger hoses meets/exceeds SAEJ20 Class A specifications.
            </li>
            <li>Our hoses are specially engineered for use in turbocharger and intake systems across a variety of vehicles, including trucks, buses, passenger cars, and railway engines, as well as industrial applications.
            </li>
            <li>These hoses are designed to provide both rigid and flexible connections, ensuring reliable performance in demanding environments such as generators and other heavy-duty machinery.
            </li>
           
          </ul></p>
            </div>
            </div>
          </div>
        ))}
	</figure>
  

	
	
</article>
    </section>



<section className="getin-touch">
{/* <GetInTouch /> */}
  </section>

    </div>
  );
};

export default ProductPage;
