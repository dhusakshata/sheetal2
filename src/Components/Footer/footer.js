


// import React, { useState } from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import BackToTopButton from "../BacktoTop/backtotop.js";
// import { BsArrowRightCircle } from "react-icons/bs";
// import "./footer.css";
// import Logo from "../../Images/logo2.webp";
// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         {/* Address Section */}
//         <div className="footer-address">
//         <img src={Logo} alt="Company Logo" className="footer-logo" />
//           <h5>Sheetal Rubber Products (P) Ltd.</h5>
//           <p>J-395, MIDC, Bhosari, Pune-411026 (INDIA)</p>
//           <div className="Contact-info">
//             <a href="tel:+919922058133" className="Contact-item">
//               <FaPhoneAlt className="icon" /> +91 -20 -27130244 ,+91 -20 -27130794
//             </a>
            
//             <a href="mailto:sheetalrubber@gmail.com" className="Contact-item">
//               <FaEnvelope className="icon" /> sheetalrubber@gmail.com 
//             </a>
//             <a href="mailto:sales@sheetalrubber.co.in" className="Contact-item">
//               <FaEnvelope className="icon" />sales@sheetalrubber.co.in
//             </a>   
//           </div>

//           {/* Social Icons Section */}
//           <div className="footer-social-icons">
//             <div className="social-icons">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
//               <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
//                 <FaWhatsapp size={24} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Quick Links Section */}
//         <div className="footer-quick-links">
//           <h5>Quick Links</h5>
//           <ul>
//             <li><Link to="/siliconpolyester">Silicone–Polyester Hoses</Link></li>
//             <li><Link to="/turbochargerhose">Turbocharger and CAC Hoses</Link></li>
//             <li><Link to="/marinewethose">Marine Wet Exhaust Hoses</Link></li>
//             <li><Link to="/epdm">EPDM Rubber Hoses</Link></li>
//             <li><Link to="/organic">Organic Rubber Hoses</Link></li>
           
//             <li><Link to="/Assembly">Assembly Hoses</Link></li>
//             <li><Link to="/wired">Wire Reinforced Hoses</Link></li>
//             <li><Link to="/fueltube">Fuel Hoses</Link></li>
//             <li><Link to="/moulded">Moulded Hoses</Link></li>
//           </ul>
//         </div>

//         {/* Newsletter Section */}
//         <div className="footer-newsletter">
//           <h5>Subscribe to our Newsletter</h5>
//           <div className="news-form">
//             <form
//               action="https://formspree.io/f/xzzdvjza" 
//               method="POST"
//             >
//            <input type="hidden" name="_replyto" value={email} />


//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 placeholder="Enter your email"
//                 required
//               />
//               <button type="submit">
//                 <BsArrowRightCircle size={35} />
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="footer-map">
//         <div className="footer-address">
      
//           <h5>Contact Us</h5>
//           <p>J-395, MIDC, Bhosari, Pune-411026 (INDIA)</p>
//           <div className="Contact-info">
//             <a href="tel:+919922058133" className="Contact-item">
//               <FaPhoneAlt className="icon" /> +91 -20 -27130244 ,+91 -20 -27130794
//             </a>
            
//             <a href="mailto:sheetalrubber@gmail.com" className="Contact-item">
//               <FaEnvelope className="icon" /> sheetalrubber@gmail.com 
//             </a>
//             <a href="mailto:sales@sheetalrubber.co.in" className="Contact-item">
//               <FaEnvelope className="icon" />sales@sheetalrubber.co.in
//             </a>   
//           </div>

         
//         </div>
         
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5735064498363!2d73.83004327496596!3d18.638243282478317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c745555555%3A0xc7aa3d886bd44d2a!2sSheetal%20Rubber%20Products%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1733346721960!5m2!1sen!2sin"
//             title="Company Location"
//             loading="lazy"
//             style={{ border: "0", width: "100%", height: "100%" }}
//             allowFullScreen
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

//       </div>

//       {/* Footer Text */}
//       <div className="footer-text">
//         <p>
//           <BackToTopButton />
//           &copy; 2025 Sheetal Rubber Products (P) Ltd. - All rights reserved | Designed by   
//           <a href="https://bitshine.in/" className="bitshine-link" target="_blank" rel="noopener noreferrer" style={{ margin: "5px", color: "white" }}>
//             Bitshine Infotech
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React, { useState } from "react";
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, 
  FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
} from "react-icons/fa";

import { Link } from "react-router-dom";
import BackToTopButton from "../BacktoTop/backtotop.js";
import { BsArrowRightCircle } from "react-icons/bs";
import "./Footers.css";
import "./footer.css";
import Logo from "../../Images/logo2.webp";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Address Section */}
        <div className="footer-Logos">
        <img src={Logo} alt="Company Logo" className="footer-logo" />

          <h5 style={{marginTop:"20px"}}>Sheetal Rubber Products (P) Ltd.</h5>

          <p>Sheetal Rubber Products Pvt Ltd, specializes in manufacturing a full range of Low Pressure Hoses, including Platinum Silicone-lined, FMK-lined Fuel Cell Hoses, Flame-retardant Hoses, and various moulded components.</p>
 {/* Newsletter Section */}
 <div className="footer-newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <div className="news-form">
            <form
              action="https://formspree.io/f/xzzdvjza" 
              method="POST"
            >
           <input type="hidden" name="_replyto" value={email} />


              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
              {/* <button type="submit">
                <BsArrowRightCircle size={35} />
              </button> */}
            </form>
            
          </div>
          <button type="submit">
         Subscribe
                {/* <BsArrowRightCircle size={35} /> */}
              </button>
        </div>
          {/* <p>J-395, MIDC, Bhosari, Pune-411026 (INDIA)</p>
          <div className="Contact-info">
            <a href="tel:+919922058133" className="Contact-item">
              <FaPhoneAlt className="icon" /> +91 -20 -27130244 ,+91 -20 -27130794
            </a>
            
            <a href="mailto:sheetalrubber@gmail.com" className="Contact-item">
              <FaEnvelope className="icon" /> sheetalrubber@gmail.com 
            </a>
            <a href="mailto:sales@sheetalrubber.co.in" className="Contact-item">
              <FaEnvelope className="icon" />sales@sheetalrubber.co.in
            </a>   
          </div> */}

          {/* Social Icons Section */}
          {/* <div className="footer-social-icons">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div> */}
        </div>

        {/* Quick Links Section */}
        <div className="footer-quick-links footer-address ">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/siliconpolyester">Silicone–Polyester Hoses</Link></li>
            <li><Link to="/turbochargerhose">Turbocharger and CAC Hoses</Link></li>
            <li><Link to="/marinewethose">Marine Wet Exhaust Hoses</Link></li>
            <li><Link to="/epdm">EPDM Rubber Hoses</Link></li>
            <li><Link to="/organic">Organic Rubber Hoses</Link></li>
           
            <li><Link to="/Assembly">Assembly Hoses</Link></li>
            <li><Link to="/wired">Wire Reinforced Hoses</Link></li>
            <li><Link to="/fueltube">Fuel Hoses</Link></li>
            <li><Link to="/moulded">Moulded Hoses</Link></li>
          </ul>
        </div>

       

        {/* Map Section */}
        <div className="footer-map">
       <div className="contact-map">
       <div className="footer-address">
      
      <h5>Contact Us</h5>
     
      <div className="Contact-info">
      <p><FaMapMarkerAlt className="icon" style={{color:"#ffc107" }} /> J-395, MIDC, Bhosari, Pune-411026</p>
      <p style={{marginLeft:"20px"}}>(INDIA)</p>
        <a href="tel:+919922058133" className="Contact-item">
          <FaPhoneAlt className="icon" style={{color:"#ffc107" }}/> +91 -20 -27130244 ,+91 -20 -27130794
        </a>
        
        <a href="mailto:sheetalrubber@gmail.com" className="Contact-item">
          <FaEnvelope className="icon" style={{color:"#ffc107" }}/> sheetalrubber@gmail.com 
        </a>
        <a href="mailto:sales@sheetalrubber.co.in" className="Contact-item">
          <FaEnvelope className="icon" style={{color:"#ffc107" }}/>sales@sheetalrubber.co.in
        </a>   
      </div>

     
    </div>
     
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5735064498363!2d73.83004327496596!3d18.638243282478317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c745555555%3A0xc7aa3d886bd44d2a!2sSheetal%20Rubber%20Products%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1733346721960!5m2!1sen!2sin"
        title="Company Location"
        loading="lazy"
        style={{ border: "0", width: "100%", height: "100%" }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
       </div>
             {/* Social Icons Section */}
             <div className="footer-social-icons">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} />
              </a>
              <div className="backtotop" style={{marginLeft:"80px"}}> <BackToTopButton /></div>
            </div>
       
            </div>
          
        </div>

      </div>

      

<div className="footer-text">
  <p>
    <div className="footer-bottom">
      <div className="footer-left">
        &copy; 2025 Sheetal Rubber Products (P) Ltd. - All rights reserved | Designed by   
        <a href="https://bitshine.in/" className="bitshine-link" target="_blank" rel="noopener noreferrer"style={{ margin: "5px", color: "white" }}>
          Bitshine Infotech
        </a>
      </div>
      {/* <div className="footer-back">
        <BackToTopButton />
      </div> */}
    </div>
  </p>
</div>

    </footer>
  );
};

export default Footer;


