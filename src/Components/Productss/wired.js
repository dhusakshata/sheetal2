import React from "react";
import { Parallax } from "react-parallax";
import "./silicon.css";
import Wired1 from "../../Images/wired11.png";
import Wired11 from "../../Images/wirede12-removebg-preview.png";
import GetInTouch from "../GetInTouch.js";
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const ProductPage = () => {
  const siliconproducts = [
    {
      id: 1,
     
      image: Wired1,
      
    },
    {
      id: 2,
      
      image: Wired11,
      
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="WIRE REINFORCED
                 HOSES" isSubProduct={true} />
  <section className="wiredhero ">
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              {/* <div className="vertical-line" style={{marginLeft:"50px"}}>
                 
              </div> */}
                 
                
             
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"30px"}}>
                 WIRE REINFORCED
                 HOSES
                </h1>
               <h2  style={{textAlign:"left",marginLeft:"-150px" ,fontWeight:"bold",fontSize:"24px"}}>Wire Strong. Performance Strong.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section wired">
       
      </section>


    <section>
   <article className="Product-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content">
              <div style={{marginLeft:"-80px",marginTop:"-200px"}}>
              <img src={Wired1} alt={product.title} className="product-image" />
              </div>
              
          <div style={{marginLeft:"-20px"}}>
          <p> Engineered for reliability in demanding
environments, with a temperature range of
-40°C to +140°C and sizes from 20 mm to
200 mm.
       </p>
          </div>
             
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className={`siliconproduct-section ${index % 2 === 0 ? "right" : "left"}`}>
            <div className="product-content" >
              <img src={Wired11} alt={product.title} className="product-image" style={{width:"500px"}} />

              <div style={{marginLeft:"20px"}}>
 <p>
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>The suction hose is designed to maintain vacuum integrity for the transfer of fluids and air.
</li>
          <li>The air filter hose is durable and ensures clean air intake for the engine.
</li>
          <li>The flexible hose is versatile, making it suitable for the transfer of both fluids and gases.

          </li>
          <li>These hoses have a good bend radius, for trickier connections, and is resistant to anti-freeze and corrosion inhibitors.
          </li>
          <li>	It is useful for air cleaner applications in automotive filters.</li>
        </ul>
        </p>
              </div>
             
            </div>
          </div>
        ))}
	</figure>
	
	
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
