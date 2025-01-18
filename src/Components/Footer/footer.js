
// // import React from 'react';
// // import './footer.css'; // Custom CSS for Footer
// // import { Link } from "react-router-dom";
// // import { FaLink } from "react-icons/fa"; // Importing icon from react-icons
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faMapMarkerAlt, faPhone,faEnvelope  } from '@fortawesome/free-solid-svg-icons';

// // import twitter from "../../Images/twitter image.webp";
// // import linkedin from "../../Images/linked in image.webp";

// // import Logos from "../../Images/logo1.png"; 

// // function Footer() {
// //   return (
// //     <div className="footer-section">
// //       {/* <div className="footer-logo">
          
// //           <img src={Logos} alt="Sheetal Rubber Industries" />
// //           </div>
// //     */}
// //         <div className="address-section">
// //         <div className="address-info">
// //           <h3>Sheetal Rubber Products (P) Ltd.</h3>
// //           <p> <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />J-395,MIDC,Bhosari,</p>
// //           <p>
// //               <>    </>      Pune-411026 (INDIA)
// //         </p>
// //         <p>
// //           <FontAwesomeIcon icon={faPhone} className="icon" /> +91 -20 -27130244 ,
// //         </p>

// //         <p>
// //            +91 -20 -27130794
// //         </p>
// //         <p>
// //           <FontAwesomeIcon icon={faEnvelope} className="icon" /> 
// //           <a href="mailto:info@sheetalrubber.com" className="email-link">sheetalrubber@gmail.com</a>
// //         </p>
// //         </div>

// //         <div className="social-media-links">
// //           <a href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer">
// //             <img src={twitter} alt="twitter" className="social-icon" />
// //           </a>
// //           <a href="https://linkedin.com/company/yourLinkedInHandle" target="_blank" rel="noopener noreferrer">
// //             <img src={linkedin} alt="LinkedIn" className="social-icon" />
// //           </a>
// //         </div>
        
// //       </div>
     


// //       <div className="quick-links">
// //         <h3><FaLink  style={{ marginRight: '10px' }}/>Quick Links</h3>
// //         <ul>
// //           <li><Link to="/siliconpolyester">Silicone–Polyester Hoses</Link></li>
// //           <li><Link to="/turbochargerhose">Turbocharger and CAC Hoses</Link></li>
// //           <li><Link to="/coolant-air-charger-hoses">Coolant Air Charger Hoses</Link></li>
// //           <li><Link to="/epdm">EPDM Rubber Hoses</Link></li>
// //           <li><Link to="/organic"> Organic Rubber Hoses</Link></li>
// //           <li><Link to="/marinewethose">Marine Wet Exhaust Hoses</Link></li>
// //           <li><Link to="/Assembly">Assembly / Branch Hoses</Link></li>
// //           <li><Link to="/wired">Wire Reinforced Hoses</Link></li>
// //           <li><Link to="/fueltube">Fuel Hoses</Link></li>
// //           <li><Link to="/moulded">Moulded Hoses</Link></li>
// //         </ul>
// //       </div>

// //       {/* news Letter */}
// //       <div className="news-letter">
// //   <p>Subscribe to our Newsletter</p>
// //   <form className="newsletter-form">
// //     <input
// //       type="email"
// //       placeholder="Enter your email address"
// //       className="email-input"
// //       required
// //     />
// //     <button type="submit" className="subscribe-button">Subscribe</button>
// //   </form>
// // </div>

// //  {/* Add the map iframe below here */}
// //  <div className="map-container">
// //   <iframe 
// //     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5735064498363!2d73.83004327496596!3d18.638243282478317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c745555555%3A0xc7aa3d886bd44d2a!2sSheetal%20Rubber%20Products%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1733346721960!5m2!1sen!2sin"
// //     width="600" 
// //     height="450" 
// //     style={{ border: '0' }}  
// //     allowFullScreen=""
// //     loading="lazy"
// //     referrerPolicy="no-referrer-when-downgrade"
// //   />
// // </div>


// //       <div className="footer-bottom-text">
// //         {/* <p>
// //           <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-and-conditions">Terms and Conditions</Link>
// //         </p> */}
// //         <p>
// //   Copyright 2024 Sheetal Rubber Products (P) Ltd. - All rights reserved | Designed by 
// //   <a href="https://bitshine.in/" class="bitshine-link" target="_blank" rel="noopener noreferrer">
// //     Bitshine Infotech
// //   </a>
// // </p>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Footer;
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './footer.css';

// // Import React Icons
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaTwitter,
//   FaLinkedin,
//   FaMapMarkerAlt,
//   FaLink,
//   FaUserCircle,
// } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="footer-section">
//       <Container>
//         <Row>


//           {/* Contact Us Section */}
//           <Col md={4} className="footer-col">
//             <h5>
//               <FaUserCircle className="icon" /> Contact Us
//             </h5>
//             <div className="contact-address">
//               <p>
//                J-395, MIDC, 
//                Bhosari,
//                Pune-411026 (INDIA)
//               </p>
//               <div className="Contact-info">
//   <a href="tel:+91 9922058133" className="Contact-item">
//     <FaPhoneAlt className="icon" />  +91 -20 -27130244 ,+91 -20 -27130794
//   </a>
//   <a href="mailto:sheetalrubber@gmail.com" className="Contact-item">
//     <FaEnvelope className="icon" /> sheetalrubber@gmail.com
//   </a>
// </div>
//             </div>
//           </Col>


//           {/* Quick Links Section */}
//           <Col md={3} className="footer-col">
//             <h5>
//               <FaLink className="icon" /> Quick Links
//             </h5>
//             <ul>
//               <li>
//                 <Link to="/siliconpolyester">Silicone–Polyester Hoses</Link>
//               </li>
//               <li>
//                 <Link to="/turbochargerhose">Turbocharger and CAC Hoses</Link>
//               </li>
//               <li>
//                 <Link to="/coolant-air-charger-hoses">Coolant Air Charger Hoses</Link>
//               </li>
//               <li>
//                 <Link to="/epdm">EPDM Rubber Hoses</Link>
//               </li>
//               <li>
//                 <Link to="/organic">Organic Rubber Hoses</Link>
//               </li>
//               <li>
//                 <Link to="/marinewethose">Marine Wet Exhaust Hoses</Link>
//               </li>
//               <li>
//                 <Link to="/Assembly">Assembly / Branch Hoses</Link>
//               </li>
//               <li>
//                 <Link to="/wired">Wire Reinforced Hoses</Link>
//               </li>
//               <li>
//                 <Link to="/fueltube">Fuel Hoses</Link>
//               </li>
//               <li>
//                 <Link to="/moulded">Moulded Hoses</Link>
//               </li>
//             </ul>
//             <div className="social-media">
//               <a
//                 href="https://twitter.com/yourTwitterHandle"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FaTwitter />
//               </a>
//               <a
//                 href="https://linkedin.com/company/yourLinkedInHandle"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FaLinkedin />
//               </a>
//             </div>
//           </Col>

//           {/* Newsletter Section */}
//           <Col md={3} className="footer-col">
//             <h5>Subscribe to Our Newsletter</h5>
//             <form className="newsletter-form">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="email-input"
//                 required
//               />
//               <button type="submit" className="subscribe-button">
//                 Subscribe
//               </button>
//             </form>
//           </Col>

//           {/* Map Section */}
//           <Col md={4} className="footer-col">
//             <h5>Find Us Here</h5>
//             <div className="map-container">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5735064498363!2d73.83004327496596!3d18.638243282478317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c745555555%3A0xc7aa3d886bd44d2a!2sSheetal%20Rubber%20Products%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1733346721960!5m2!1sen!2sin"
//                 title="Company Location"
//                 loading="lazy"
//                 style={{ border: '0', width: '100%', height: '100%' }}
//                 allowFullScreen
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </Col>
//         </Row>

//         {/* Footer Bottom Section */}
//         <Row className="footer-bottom">
//           <Col className="text-center">
//             <p>
//               &copy; {new Date().getFullYear()} Sheetal Rubber Products (P)
//               Ltd. - All rights reserved | Designed by{' '}
//               <a
//                 href="https://bitshine.in/"
//                 className="bitshine-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Bitshine Infotech
//               </a>
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
 //Import React Icons
 import {
   FaPhoneAlt,
  FaEnvelope,
   FaMapMarkerAlt,
  FaLink,
   FaUserCircle,
 } from 'react-icons/fa';
import { BsArrowRightCircle } from "react-icons/bs";
import "./footer.css";  // Your custom CSS

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing!");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address Section */}
        <div className="footer-address">
          <h5>Sheetal Rubber Products (P) Ltd.</h5>
          <p>
          J-395, MIDC, 
          Bhosari,           
          Pune-411026 (INDIA)
          </p>
          <div className="Contact-info">
   <a href="tel:+91 9922058133" className="Contact-item">
    <FaPhoneAlt className="icon" />  +91 -20 -27130244 ,+91 -20 -27130794
   </a>
   <a href="mailto:sheetalrubber@gmail.com" className="Contact-item">
    <FaEnvelope className="icon" /> sheetalrubber@gmail.com
   </a>
 </div>

    {/* Social Icons Section */}
    <div className="footer-social-icons">
         
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-quick-links">
          <h5>Quick Links</h5>
          <ul>
               <li>
                 <Link to="/siliconpolyester">Silicone–Polyester Hoses</Link>
              </li>
               <li>
                <Link to="/turbochargerhose">Turbocharger and CAC Hoses</Link>
               </li>
               <li>
                 <Link to="/coolant-air-charger-hoses">Coolant Air Charger Hoses</Link>
               </li>
               <li>
                <Link to="/epdm">EPDM Rubber Hoses</Link>
               </li>
               <li>
               <Link to="/organic">Organic Rubber Hoses</Link>
               </li>
              <li>
                 <Link to="/marinewethose">Marine Wet Exhaust Hoses</Link>
              </li>
               <li>
                <Link to="/Assembly">Assembly / Branch Hoses</Link>
              </li>
               <li>
                 <Link to="/wired">Wire Reinforced Hoses</Link>
              </li>
               <li>
                 <Link to="/fueltube">Fuel Hoses</Link>
               </li>
               <li>
                 <Link to="/moulded">Moulded Hoses</Link>
               </li>
           </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h5>Subscribe to our Newsletter</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
            <button type="submit">
              <BsArrowRightCircle size={24} />
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="footer-map">
          <h5>Our Location</h5>
          <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5735064498363!2d73.83004327496596!3d18.638243282478317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c745555555%3A0xc7aa3d886bd44d2a!2sSheetal%20Rubber%20Products%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1733346721960!5m2!1sen!2sin"
                title="Company Location"
                loading="lazy"
                style={{ border: '0', width: '100%', height: '100%' }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
        </div>

     
      </div>

      {/* Footer Text */}
      <div className="footer-text">
        <p>&copy;  2025 Sheetal Rubber Products (P) Ltd. - All rights reserved | Designed by   
     <a href="https://bitshine.in/" class="bitshine-link" target="_blank" rel="noopener noreferrer" style={{margin:"5px", color:"#ffc107"}}> 
        Bitshine Infotech
  </a>
</p>
      </div>
    </footer>
  );
};

export default Footer;
