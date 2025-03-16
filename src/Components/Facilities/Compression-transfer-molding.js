import React from "react";

import Compression from "../../Images/Compression Molding.jpg";
import "./autoclave.css";
import { Link } from "react-router-dom";
import { BsArrowDownCircle } from "react-icons/bs";
import hoses from "../../Images/compressionbg.jpg";

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
          <h1 style={{fontSize:"3rem",textTransform:"uppercase"}}>Compression Transfer Moulding</h1>
          {/* <div className="scroll-down" onClick={handleScrollDown}>
                               <BsArrowDownCircle size={30} />
                              </div> */}
          </div>
        </div>
        <div className="subhero-right">
          <img src={hoses} alt="Hero Background" className="subhero-image" />
        </div>
      </div>
    <section className="compression">

    </section>

    <article className="compression-article">
	<figure className="autoclave-card compression-card">

          <div  className="autoclave-section">
            <div className="autoclave-content">
            <img src={Compression} alt="Compression Transfer Moulding" style={{ width: "500px",margin:"40px"}} 
          className='compression-img'
          />
            </div>
          </div>
 
	</figure>

	
	<figure className="autoclave-card compression-card">
	
          <div className="autoclave-section">
         
            <div className="autoclave-content1" >
            <p>
            Our production line utilizes Compression Transfer Moulding, a highly efficient process for shaping rubber
              compounds into finished products. This method involves placing pre-measured rubber material into a heated
              mould, where it is subjected to pressure to achieve the desired shape and density. Compression transfer
              moulding ensures uniform material distribution and optimal curing, resulting in high-quality rubber
              components with consistent properties. This process is ideal for producing complex shapes and larger
              quantities, enhancing production efficiency while maintaining rigorous quality standards in our finished
              products.
              <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Purpose:</h4>
            <ul>
              <li>Compression transfer moulding is a vital process for shaping rubber compounds into high-quality, complex
              products using heat and pressure.</li>
            </ul>
            <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Process:</h4>
            <ul>
              <li>Compression transfer moulding is a vital process for shaping rubber compounds into high-quality, complex
              products using heat and pressure.</li>
            </ul>
           
            </p>
            
            </div>
          </div>
        
	</figure>

  <figure className="autoclave-card compression-card">
	
          <div className="autoclave-section">
         
            <div className="autoclave-content2" >
            <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Advantages:</h4>
            <ul>
              <li><b>Versatility:</b> Accommodates various rubber compounds for tailored properties.</li>
              <li><b>Precision:</b> Ensures uniform thickness and density for reliable performance.</li>
              <li><b>Complex Shapes:</b> Capable of producing intricate designs.</li>
              <li><b>Reduced Waste:</b> Minimizes scrap, leading to cost savings.</li>
            </ul>
            <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Applications:</h4>
            <ul>
              <li><b>Automotive Components:</b> Seals, gaskets, and vibration isolators.</li>
              <li><b>Industrial Products:</b> O-rings, bushings, and grommets.</li>
              <li><b>Consumer Goods:</b> Grips, handles, and flooring mats.</li>
              <li><b>Electrical Insulation:</b> Insulating components for safety and performance.</li>
            </ul>
            <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Benefits:</h4>
            <ul style={{fontSize:"16px"}}>
              <li ><b>Enhanced Quality:</b> Produces high-quality, reliable components.</li>
              <li><b>Efficiency:</b> Increases throughput and reduces lead times.</li>
              <li><b>Customization:</b> Easily modified for different formulations and designs.</li>
            </ul>
            </div>
          </div>
        
	</figure>
 

</article>
 {/* <section className="compressionbg"></section> */}
   

    </div>
  );
};

export default Inhousefacility;
