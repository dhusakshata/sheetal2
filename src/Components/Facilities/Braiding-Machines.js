import React, { useEffect } from 'react';
import './subfacility3.css'; // Importing the CSS for styling
import Braiding from "../../Images/braiding-machine__1_-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Facility10 = () => {
  useEffect(() => {
       AOS.init({ duration: 1000 }); // Initialize AOS for animations
     }, []);
  return (
    <div className="facility-container3">
      {/* Header Section */}
      <div className="facility-header3" data-aos="fade-down">
        <h1>Braiding Machines</h1>
      </div>

      {/* Main Content Section */}
      <div className="facility-main3">
        {/* Image Section */}
        <div className="facility-image3" data-aos="fade-right">
          <img
            src={Braiding}
            alt="Braiding Machines"
            style={{ width: "500px", height: "350px", marginTop: "-20px" }}
          />
        </div>

        {/* Text Section */}
        <div className="facility-content3" >
          <div className="facility-paragraph3">
            <p>
              Our production line includes advanced Braiding Machines that are vital for producing reinforced rubber
              components. These machines braid multiple strands of rubber or other materials to create durable,
              high-strength hoses, cables, and other products. Braiding enhances the structural integrity and
              flexibility of the rubber, ensuring superior performance under pressure. This technology allows for the
              production of customized braided designs, providing the perfect balance between flexibility and strength
              in products like hydraulic hoses, automotive cables, and industrial tubing, all while maintaining high
              production efficiency and consistent quality.
            </p>
          </div>

          {/* Overview Section */}
    
          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Purpose:</h4>
            <p>
              Weave reinforcing material around a rubber core to improve mechanical properties like strength, wear
              resistance, and flexibility.
            </p>
          </div>

          <div className="info-box3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Operation:</h4>
            <p>Uses multiple spools to weave materials in circular/spiral patterns around a rubber core or tube.</p>
          </div>

          {/* Advantages Section */}
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Advantages:</h4>
          <ul>
            <li><b>Enhanced Strength:</b> Superior tensile strength, essential for hydraulic hoses and cables.</li>
            <li><b>Flexibility:</b> Maintains flexibility despite added reinforcement.</li>
            <li><b>Customization:</b> Different materials and patterns for specific applications.</li>
            <li><b>Durability:</b> Protects rubber core from damage, extending product lifespan.</li>
          </ul>

         

          {/* Production Process Section */}
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Production Process:</h4>
          <ul>
            <li>Material preparation (core and reinforcement selection).</li>
            <li>Braiding of reinforcing material around the rubber core.</li>
            <li>Post-braiding (vulcanization or coating as needed).</li>
          </ul>

          {/* Benefits Section */}
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Benefits for Rubber Producers:</h4>
          <ul>
            <li><b>Improved Performance:</b> Enhanced strength, flexibility, and durability.</li>
            <li><b>Expanded Product Range:</b> Ability to offer high-performance products.</li>
            <li><b>Cost Efficiency:</b> Increases product lifespan, reducing maintenance costs.</li>
          </ul>

        

          {/* Conclusion Section */}
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Conclusion:</h4>
          <p>
            <b>Braiding machines</b> are essential for producing high-performance, reinforced rubber products, offering
            versatility, strength, and durability across industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facility10;
