

// import React, { useState } from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

// import { Link } from 'react-router-dom';
// import BackToTopButton from "../BacktoTop/backtotop.js";
//  //Import React Icons
//  import {
//    FaPhoneAlt,
//   FaEnvelope,
   
//  } from 'react-icons/fa';
// import { BsArrowRightCircle } from "react-icons/bs";
// import "./footer.css";  // Your custom CSS

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       alert("Thank you for subscribing!");
//     } else {
//       alert("Please enter a valid email address.");
//     }
//   };

  

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Address Section */}
//         <div className="footer-address">
//           <h5>Sheetal Rubber Products (P) Ltd.</h5>
//           <p>
//           J-395, MIDC, 
//           Bhosari,           
//           Pune-411026 (INDIA)
//           </p>
//           <div className="Contact-info">
//    <a href="tel:+91 9922058133" className="Contact-item">
//     <FaPhoneAlt className="icon" />  +91 -20 -27130244 ,+91 -20 -27130794
//    </a>
//    <a href="mailto:sheetalrubber@gmail.com" className="Contact-item">
//     <FaEnvelope className="icon" /> sheetalrubber@gmail.com
//    </a>
//  </div>

//     {/* Social Icons Section */}
//     <div className="footer-social-icons">
         
//           <div className="social-icons">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <FaFacebook size={24} />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <FaTwitter size={24} />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin size={24} />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <FaInstagram size={24} />
//             </a>
//             <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
//              <FaWhatsapp size={24} />
//            </a>
//           </div>
//         </div>
        
//         </div>

//         {/* Quick Links Section */}
//         <div className="footer-quick-links">
        
//           <h5>Quick Links</h5>
//           <ul>
//                <li>
//                  <Link to="/siliconpolyester">Silicone–Polyester Hoses</Link>
//               </li>
//                <li>
//                 <Link to="/turbochargerhose">Turbocharger and CAC Hoses</Link>
//                </li>
             
//                <li>
//                 <Link to="/epdm">EPDM Rubber Hoses</Link>
//                </li>
//                <li>
//                <Link to="/organic">Organic Rubber Hoses</Link>
//                </li>
//               <li>
//                  <Link to="/marinewethose">Marine Wet Exhaust Hoses</Link>
//               </li>
//                <li>
//                 <Link to="/Assembly">Assembly Hoses</Link>
//               </li>
//                <li>
//                  <Link to="/wired">Wire Reinforced Hoses</Link>
//               </li>
//                <li>
//                  <Link to="/fueltube">Fuel Hoses</Link>
//                </li>
//                <li>
//                  <Link to="/moulded">Moulded Hoses</Link>
//                </li>
//            </ul>
//         </div>

//         {/* Newsletter Section */}
//         <div className="footer-newsletter">
//       <h5>Subscribe to our Newsletter</h5>
//       <div className="news-form">
//         <form
//           action="https://formspree.io/f/manqbbnr" // Formspree endpoint
//           method="POST"
         
//         >
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleEmailChange}
//             placeholder="Enter your email"
//             required
//           />
//           <button type="submit">
//             <BsArrowRightCircle size={35} />
//           </button>
//         </form>
//       </div>
//     </div>

//         {/* Map Section */}
//         <div className="footer-map">
//           <h5>Our Location</h5>
//           <iframe
//                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5735064498363!2d73.83004327496596!3d18.638243282478317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c745555555%3A0xc7aa3d886bd44d2a!2sSheetal%20Rubber%20Products%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1733346721960!5m2!1sen!2sin"
//                 title="Company Location"
//                 loading="lazy"
//                 style={{ border: '0', width: '100%', height: '100%' }}
//               allowFullScreen
//               referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//         </div>

        
        
      
//       </div>
     
//       {/* Footer Text */}
//       <div className="footer-text">
  
//         <p>
//         <BackToTopButton />
//           &copy;  2025 Sheetal Rubber Products (P) Ltd. - All rights reserved | Designed by   
//      <a href="https://bitshine.in/" class="bitshine-link" target="_blank" rel="noopener noreferrer" style={{margin:"5px", color:"white"}}> 
//         Bitshine Infotech
//   </a>
  
// </p>

//       </div>
   
//     </footer>
//   );
// };

// export default Footer;




// import React, { useState } from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import BackToTopButton from "../BacktoTop/backtotop.js";
// import { BsArrowRightCircle } from "react-icons/bs";
// import { db, collection, addDoc } from "../../firebaseConfig"; // Import Firestore
// import "./footer.css";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) {
//       setMessage("Please enter a valid email.");
//       return;
//     }

//     try {
//       await addDoc(collection(db, "newsletterSubscriptions"), {
//         email: email,
//         timestamp: new Date(),
//       });

//       setMessage("Thank you for subscribing!");
//       setEmail(""); // Clear the input field
//     } catch (error) {
//       console.error("Error adding document: ", error);
//       setMessage("Subscription failed. Try again.");
//     }
//   };
//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         {/* Address Section */}
//         <div className="footer-address">
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
//             <li><Link to="/epdm">EPDM Rubber Hoses</Link></li>
//             <li><Link to="/organic">Organic Rubber Hoses</Link></li>
//             <li><Link to="/marinewethose">Marine Wet Exhaust Hoses</Link></li>
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
//              onSubmit={handleSubmit}
//             >
//               <input
//                  type="email"
//                  value={email}
//                  onChange={handleEmailChange}
//                  placeholder="Enter your email"
//                  required
//               />
//               <button type="submit">
//                 <BsArrowRightCircle size={35} />
//               </button>
//             </form>
//           </div>
//           {message && <p className="message">{message}</p>} {/* Success or Error Message */}
//         </div>

//         {/* Map Section */}
//         <div className="footer-map">
//           <h5>Our Location</h5>
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
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import BackToTopButton from "../BacktoTop/backtotop.js";
import { BsArrowRightCircle } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Address Section */}
        <div className="footer-address">
          <h5>Sheetal Rubber Products (P) Ltd.</h5>
          <p>J-395, MIDC, Bhosari, Pune-411026 (INDIA)</p>
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
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-quick-links">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/siliconpolyester">Silicone–Polyester Hoses</Link></li>
            <li><Link to="/turbochargerhose">Turbocharger and CAC Hoses</Link></li>
            <li><Link to="/epdm">EPDM Rubber Hoses</Link></li>
            <li><Link to="/organic">Organic Rubber Hoses</Link></li>
            <li><Link to="/marinewethose">Marine Wet Exhaust Hoses</Link></li>
            <li><Link to="/Assembly">Assembly Hoses</Link></li>
            <li><Link to="/wired">Wire Reinforced Hoses</Link></li>
            <li><Link to="/fueltube">Fuel Hoses</Link></li>
            <li><Link to="/moulded">Moulded Hoses</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h5>Subscribe to our Newsletter</h5>
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
              <button type="submit">
                <BsArrowRightCircle size={35} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="footer-map">
          <h5>Our Location</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5735064498363!2d73.83004327496596!3d18.638243282478317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c745555555%3A0xc7aa3d886bd44d2a!2sSheetal%20Rubber%20Products%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1733346721960!5m2!1sen!2sin"
            title="Company Location"
            loading="lazy"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* Footer Text */}
      <div className="footer-text">
        <p>
          <BackToTopButton />
          &copy; 2025 Sheetal Rubber Products (P) Ltd. - All rights reserved | Designed by   
          <a href="https://bitshine.in/" className="bitshine-link" target="_blank" rel="noopener noreferrer" style={{ margin: "5px", color: "white" }}>
            Bitshine Infotech
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
