import React from "react";
import "./facility1.css";
import hoses from "../../Images/coldfeedbg.avif";
import HotFeed from "../../Images/hot-feed-rubber-extruder-machine-removebg-preview.png";
import ColdFeed from "../../Images/cold-feed-removebg-preview.png";
import CoExtrusion from "../../Images/coextrusion.png";
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
          <h1 className="hero-title" style={{fontSize:"3rem"}}>Hot Feed, Cold Feed & Co-Extrusion Extruders</h1>
          
          </div>
        </div>
        <div className="subhero-right">
          <img src={hoses} alt="Hero Background" className="subhero-image" />
        </div>
      </div>
    <section className="hotcoldbg">

    </section>

    <article className="sub-article">

	<figure className="sub-card">

          <div  className="sub-section">
            <div className="sub-content1">
            <p>
            We utilize both hot feed and cold feed extruders, along with co-extrusion technology, 
        to manufacture a variety of rubber products with precision and efficiency. Hot feed 
        extruders allow for better control of material flow and temperature, while cold feed 
        extruders are ideal for processing various rubber compounds. Co-extrusion enables the 
        production of multi-layered hoses, combining different materials for enhanced performance 
        and durability.</p>
            </div>
          </div>
 
	</figure>

	
	<figure className="sub-card">
	
          <div className="sub-section">
          <h1 style={{textAlign:"center", margin:"30px",fontSize:"2rem",textTransform:"uppercase"}}>Hot Feed Extruder</h1>
            <div className="sub-content" >
            <img src={HotFeed} alt="Hot Feed Extruder" className="subimg"/>
           
            <ul>
              <li>A hot feed extruder for rubber hoses shapes rubber into hoses by feeding heated rubber through a die.</li>
              <li>The extruder applies controlled heat and pressure to maintain consistent quality and dimensions.</li>
              <li>This process ensures the rubber is moulded to the desired shape with properties like flexibility and durability.</li>
              <li>It is optimized for continuous production of large volumes.</li>
            </ul>
            </div>
          </div>
        
	</figure>

  <figure className="sub-card">
	
          <div className="sub-section1">
          <h1 style={{textAlign:"center", margin:"30px",fontSize:"2rem",textTransform:"uppercase"}}>Cold Feed Extruder</h1>
            <div className="sub-content2" >
            <img src={ColdFeed} alt="cold Feed Extruder" style={{width:"500px"}} className="cold-img"/>
           
            <ul>
              <li>Processes rubber compounds at ambient or slightly elevated temperatures without pre-heating, offering versatility in handling various compounds and profiles.</li>
              <li>The flexibility of the system allows it to handle different materials and complex shapes.</li>
              <li>It is more energy-efficient than hot feed extruders, as no external pre-heating is required.</li>
              <li>Better temperature control reduces scorching and improves the overall quality of the product.</li>
              <li>It minimizes downtime by enabling faster product changes without the need for pre-heating.</li>
            </ul>
            </div>
          </div>
        
	</figure>
  <figure className="sub-card">
	
  <div className="sub-section">
  <h1 style={{textAlign:"center", margin:"30px",fontSize:"2rem",textTransform:"uppercase"}}>Co-Extrusion Extruder</h1>
    <div className="sub-content3" >
    <img src={CoExtrusion} alt="Co-Extrusion Extruder" style={{width:"900px"}} className="co-img"/>
   
    <ul>
           
           <li><b>Multi-Extruder System:</b> Two or more extruders feed different materials into a single die.</li>
           <li><b>Layering:</b> Materials with different properties (hardness, color, composition) are extruded together to form a multi-layered or multi-component product.</li>
           <li><b>Versatility:</b> Custom solutions for advanced performance characteristics in products.</li>
           <li><b>Cost-Effective:</b> Single-step process for producing multi-layer products, reducing manufacturing complexity.</li>
           <li><b>Industry Use:</b> Popular in automotive, construction, and manufacturing for creating durable and functional multi-layered rubber products.</li>
          
         </ul>
    </div>
  </div>

</figure>


</article>
 <section className="hotbg1"></section>
   

    </div>
  );
};

export default Inhousefacility;
