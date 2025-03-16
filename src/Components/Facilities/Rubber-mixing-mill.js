import React from "react";

import RubberMixing from "../../Images/uni-drive-rubber-mixing-mill-12x30-removebg-preview-1.webp";
import "./autoclave.css";
import { Link } from "react-router-dom";
import { BsArrowDownCircle } from "react-icons/bs";
import hoses from "../../Images/rubber-mixing-millbg.webp";

const Inhousefacility = () => {

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="subhero-container">
        <div className="subhero-left">
          <div className="subhero-text-content">
          <h1 style={{fontSize:"3rem",textTransform:"uppercase"}}>rubber mixing mill</h1>
          {/* <div className="scroll-down" onClick={handleScrollDown}>
                               <BsArrowDownCircle size={30} />
                              </div> */}
          </div>
        </div>
        <div className="subhero-right">
          <img src={RubberMixing} alt="Hero Background" className="rollhero-image" />
        </div>
      </div>
    <section className="rubber-mixing">

    </section>

    <article className="rubber-mixing-article">
	<figure className="autoclave-card Rubber-card">

          <div  className="autoclave-section">
            <div className="autoclave-content">
            <img src={RubberMixing} alt="Compression Transfer Moulding" style={{ width: "800px"}} 
          className='rubber-img'
          />
            </div>
          </div>
 
	</figure>

	
	<figure className="autoclave-card Rubber-card">
	
          <div className="autoclave-section">
         
            <div className="autoclave-content1" >
            <p>
            Our production line is equipped with Rubber Mixing Mills, which are essential for the thorough blending
              of rubber compounds. These mills utilize two or more heavy rollers to process raw materials, ensuring a
              uniform mixture and optimal consistency. The efficient operation of rubber mixing mills allows for
              precise control over the mixing process, resulting in high-quality rubber products with desired
              properties. By facilitating the preparation of various rubber formulations, these mills enhance
              production efficiency while maintaining stringent quality standards in our finished products.

              <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Purpose:</h4>
            <ul>
             <li> Rubber mixing mills are essential for blending raw rubber materials with fillers and additives to create
             uniform rubber compounds.</li>
            </ul>
           
           
            </p>
            
            </div>
          </div>
        
	</figure>

  <figure className="autoclave-card Rubber-card">
	
          <div className="autoclave-section">
         
            <div className="autoclave-content2" >
            <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Advantages:</h4>
            <ul>
              <li><b>Uniform Mixing:</b> Ensures consistent properties in the final product.</li>
              <li><b>Versatility:</b> Handles various rubber formulations with different viscosities.</li>
              <li><b>Efficient Processing:</b> Can process large volumes quickly, increasing production capacity.</li>
              <li><b>Adjustable Settings:</b> Gap between rollers can be adjusted for precise formulation control.</li>
            </ul>
            <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Applications:</h4>
            <ul>
              <li><b>Rubber Compounding:</b> Producing multiple compounds for multiple types of hoses.</li>
              <li><b>Color Mixing:</b> Blending color concentrates into rubber for aesthetic products.</li>
              <li><b>Additive Incorporation:</b> Uniformly distributing additives for enhanced performance.</li>
            </ul>

               <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Benefits:</h4>
            <ul>
              <li><b>Enhanced Product Quality:</b> Consistent mixing leads to reliable rubber products.</li>
              <li><b>Increased Production Efficiency:</b> Reduces cycle times and boosts productivity.</li>
              <li><b>Customization:</b> Adjusts mixing processes for specific formulations.</li>
            </ul>
           
            </div>
          </div>
        
	</figure>
 

</article>
 {/* <section className="rubber-mixing"></section> */}
   

    </div>
  );
};

export default Inhousefacility;
