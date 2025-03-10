import React from "react";

import Knitting from "../../Images/knitting2.png";
import "./autoclave.css";
import { Link } from "react-router-dom";
import { BsArrowDownCircle } from "react-icons/bs";
import hoses from "../../Images/knnitingbg.jpg";

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
          <h1 style={{fontSize:"3rem",textTransform:"uppercase"}}>Knitting Machines</h1>
          {/* <div className="scroll-down" onClick={handleScrollDown}>
                               <BsArrowDownCircle size={30} />
                              </div> */}
          </div>
        </div>
        <div className="subhero-right">
          <img src={hoses} alt="Hero Background" className="knittinghero-image" />
        </div>
      </div>
    <section className="Knitting">

    </section>

    <article className="Knitting-article">
	<figure className="autoclave-card">

          <div  className="autoclave-section">
            <div className="autoclave-content">
            <img src={Knitting} alt="Compression Transfer Moulding" style={{ width: "500px",marginLeft:"120px" }} 
          className='compression-img'
          />
            </div>
          </div>
 
	</figure>

	
	<figure className="autoclave-card">
	
          <div className="autoclave-section">
         
            <div className="autoclave-content1" >
            <p>
            Our production line includes advanced Knitting Machines that play a crucial role in the production of
              knitted rubber components. These machines utilize precise knitting techniques to create strong and
              flexible rubber fabrics, ensuring consistent quality and durability. The ability to knit various patterns
              and thicknesses allows for customization based on specific product requirements.
            

            </p>
            
            </div>
          </div>
        
	</figure>

  <figure className="autoclave-card">
	
          <div className="autoclave-section">
         
            <div className="autoclave-content2" >
            <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Purpose:</h4>
              <p style={{marginTop:"-20px"}}>Produce knitted rubber fabrics for automotive, industrial, and consumer products.</p>

            <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Advantages:</h4>
            <ul style={{marginTop:"-20px"}}>
              <li><b>Customization:</b> Diverse patterns, thicknesses, and densities.</li>
              <li><b>Flexibility:</b> Excellent stretch and recovery.</li>
              <li><b>Strength:</b> Superior tensile strength.</li>
              <li><b>Efficiency:</b> High-speed operation for faster production.</li>
            </ul>
           
            </div>
          </div>
        
	</figure>
 

</article>
 <section className="Knittingbg"></section>
   

    </div>
  );
};

export default Inhousefacility;
