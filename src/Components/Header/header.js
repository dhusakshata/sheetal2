
// import React, { useState, useRef } from "react";
// import { Navbar, Nav, Container, Offcanvas, NavDropdown } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom"; // For navigation
// import { AiOutlineMenu } from "react-icons/ai";
// import { FaEnvelope, FaPhone,FaSearch } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./header.css";
// import Logo from "../../Images/logo1.png";





// const data = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Products", link: "/product" },
//   { id: 3, name: "Facilities", link: "/facilities" },
//   { id: 4, name: "Careers", link: "/career" },
//   { id: 5, name: "About Us", link: "/about" },
//   { id: 6, name: "Contact Us", link: "/contact" },
//   { id: 7, name: "Manufacturing", link: "/manufacturing" },
//   { id: 8, name: "Inhouse", link: "/inhouse" },
//   { id: 9, name: "Assembly", link: "/assembly" },
//   { id: 10, name: "EPDM", link: "/epdm" },
//   { id: 11, name: "Fuel Tube", link: "/fueltube" },
//   { id: 12, name: "Marine Wet Hose", link: "/marinewethose" },
//   { id: 13, name: "Moulded", link: "/moulded" },
//   { id: 14, name: "Organic", link: "/organic" },
//   { id: 15, name: "Silicon Polyester", link: "/siliconpolyester" },
//   { id: 16, name: "Turbocharger", link: "/turbochargerhose" },

//   //Manufacturing facilities
//   { id: 17, name: "hot cold feed", link: "/hot-cold-feed" },
//   { id: 18, name: "Dual head extruders", link: "/Dual-head-extruders" },
//   { id: 19, name: "Auto clave vulcanizer", link: "/Auto-clave-vulcanizer" },
//   { id: 20, name: "Dispersion kneader", link: "/Dispersion-kneader" },
//   { id: 21, name: "3 role calendaring machine", link: "/3-role-calendaring-machine" },
//   { id: 22, name: "Compression transfer molding", link: "/Compression-transfer-molding" },
//   { id: 23, name: "Rubber mixing mill", link: "/Rubber-mixing-mill" },
//   { id: 24, name: "Knitting machine", link: "/Knitting-machine" },
//   { id: 25, name: "Braiding Machines", link: "/Braiding-Machines" },


//   //Inhouse facilities
//   { id: 27, name: "Moving Die Rheometer", link: "/Moving-Die-Rheometer" },
//   { id: 28, name: "Burst pressure test machines", link: "/Burst-pressure-test-machines" },
//   { id: 29, name: "Ozone test chamber", link: "/Ozone-test-chamber" },
//   { id: 30, name: "UTM tensil", link: "/UTM-tensil" },
//   { id: 31, name: "Heating oven", link: "/Heating-oven" },
//   { id: 32, name: "Muffle furnance", link: "/Muffle-furnance" },


// ];


// const Header = () => {

// //Search bar ->
// const [isSearchOpen, setIsSearchOpen] = useState(false); // Track if search is open
// const [searchInput, setSearchInput] = useState(""); // Store search query
// const [searchDisabled, setSearchDisabled] = useState(false); // Track if search input should be disabled
// const searchInputRef = useRef(null); // Ref for the search input to focus
// const navigate = useNavigate();
// //<-
//  // Search functionality ->
//  const handleSearch = () => {
//   const query = searchInput.toLowerCase();
//   const match = data.find((item) => item.name.toLowerCase().includes(query));
//   if (match) {
//     navigate(match.link);
//   } else {
//     alert("No results found.");
//   }

//   // Disable the search input after search
//   setSearchDisabled(true);
//   setIsSearchOpen(false); // Close search bar after search
// };

// const handleInputChange = (e) => setSearchInput(e.target.value);

// const handleSearchIconClick = () => {
//   if (isSearchOpen) {
//     // If search is already open, perform the search
//     handleSearch();
//   } else {
//     // Otherwise, open the search bar and reset the state
//     setIsSearchOpen(true);
//     setSearchDisabled(false); // Enable search input again
//     setSearchInput(""); // Clear the previous search query
//     setTimeout(() => {
//       // Focus the input once it's visible
//       searchInputRef.current.focus();
//     }, 100);
//   }
// };

// const handleBlur = () => {
//   // Close search bar when clicked outside (but only if input is empty)
//   if (!searchInput) {
//     setIsSearchOpen(false);
//   }
// };
// //<-
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <header className="header">
//       <div className="main-header d-flex align-items-center justify-content-between">
//         {/* Logo */}
//         <div href="/" className="logo">
//           <img src={Logo} alt="Logo" className="logo-image" />
//         </div>
   
//         {/* Contact Info */}
//         <div className="contact-info d-none d-lg-flex flex-column text-end">
//           <a href="mailto:sheetalrubber@gmail.com" className="contact-email">
//             <FaEnvelope className="icon" /> sheetalrubber@gmail.com
//           </a>
//           <a href="+91–(20)27130244" className="contact-number">
//             <FaPhone className="icon" /> +91–(20)27130244
//           </a>
//           <a href="+91–(20)27130794" className="contact-number">
//             <FaPhone className="icon" /> +91–(20)27130794
//           </a>
//         </div>
//       </div>

//       <Navbar expand="lg" className="navbar-custom">
//         <Container fluid>
//           {/* Toggle Button for Smaller Screens */}
//           <Navbar.Toggle
//             aria-controls="offcanvasNavbar"
//             className="menu-toggle"
//             onClick={handleShow}
//           >
//             <AiOutlineMenu size={24} />
//           </Navbar.Toggle>

//           {/* Sidebar for Navbar Items */}
//           <Navbar.Offcanvas
//             id="offcanvasNavbar"
//             aria-labelledby="offcanvasNavbarLabel"
//             placement="end"
//             show={show}
//             onHide={handleClose}
//             style={{ color: "white" }}
//           >
//             <Offcanvas.Header closeButton style={{ color: "white" }}>
//               <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 <Nav.Link href="/">Home</Nav.Link>
//                 <Nav.Link href="/aboutus">About</Nav.Link>

//                 {/* Product Dropdown */}
//                 <NavDropdown title="Product" id="product-dropdown">
//                   <NavDropdown.Item href="/siliconpolyester">
//                     SILICONE - POLYESTER HOSES
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/turbochargerhose">
//                     TURBOCHARGER AND CAC HOSES
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/epdm">
//                     MARINE WET EXHAUST HOSES
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/organic">
//                     ORGANIC RUBBER HOSES
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/Assembly">
//                     ASSEMBLY HOSES
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/wired">
//                     WIRE REINFORCED HOSES
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/fueltube">FUEL HOSES</NavDropdown.Item>
//                   <NavDropdown.Item href="/moulded">MOULDED HOSES</NavDropdown.Item>
//                   <NavDropdown.Item href="/marinewethose">
//                     MARINE WET EXHAUST HOSES
//                   </NavDropdown.Item>
//                 </NavDropdown>

//                 {/* Facility Dropdown */}
//                 <NavDropdown title="Facility" id="facility-dropdown">
//                   <NavDropdown.Item href="#">Facility 1</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown
//                     title="Sub Facility 1"
//                     id="subfacility1-dropdown"
//                     className="nested-dropdown"
//                   >
//                     <NavDropdown.Item href="/facility1/sub1">Sub 1</NavDropdown.Item>
//                     <NavDropdown.Item href="/facility1/sub2">Sub 2</NavDropdown.Item>
//                   </NavDropdown>
//                   <NavDropdown
//                     title="Sub Facility 2"
//                     id="subfacility2-dropdown"
//                     className="nested-dropdown"
//                   >
//                     <NavDropdown.Item href="/facility2/sub1">Sub 1</NavDropdown.Item>
//                     <NavDropdown.Item href="/facility2/sub2">Sub 2</NavDropdown.Item>
//                   </NavDropdown>
//                 </NavDropdown>

//                 <Nav.Link href="/news">News & Blogs</Nav.Link>
//                 <Nav.Link href="/career">Career</Nav.Link>
//                 <Nav.Link href="/contact">Contact Us</Nav.Link>

// {/* Search Icon and Input */}
// <div className="search-bar">
//                 {isSearchOpen ? (
//                   <div style={{ display: "flex" }}>
//                     <input
//                       ref={searchInputRef}
//                       type="text"
//                       placeholder="Go with sheetal rubber here..."
//                       value={searchInput}
//                       onChange={handleInputChange}
//                       onBlur={handleBlur} // Close search input if clicked outside
//                       disabled={searchDisabled} // Disable input after search
//                     />
//                     <button onClick={handleSearch} disabled={searchDisabled}>
//                     <FaSearch className="icon" />
//                     </button>
//                   </div>
//                 ) : (
//                   <button className="search-icon" onClick={handleSearchIconClick}>
//                   <FaSearch className="icon" />
//                   </button>
//                 )}
//               </div>
                
//               </Nav>
//             </Offcanvas.Body>
            
//           </Navbar.Offcanvas>
            
//         </Container>
       
//       </Navbar>
      
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaSearch, FaChevronDown, FaTimes } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// import "./header.css"; 

// // Styled components for the header
// const HeaderContainer = styled.header
//   display: flex;
//   flex-direction: column;
//   position: sticky;
//   top: 0;
//  background-color: #000 !important; /* Set header background to black */
//   color: white;
//   z-index: 1000;
// ;

// const TopSection = styled.div
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: #222;
// ;

// const Logo = styled.div
//   font-size: 24px;
//   font-weight: bold;
// ;

// const ContactInfo = styled.div
//   display: flex;
//   gap: 15px;
// ;

// const NavBar = styled.nav
//   display: flex;
//   justify-content: center; /* Center the navbar items */
//   background-color: #444;
//   padding: 8px 20px; /* Reduced the distance between navbar items */
//   gap: 10px; /* Reduced the gap between navbar items */
//   position: relative;
//   z-index: 10;
// ;

// const NavItem = styled.div
//   position: relative;
//   padding: 10px;
//   text-transform: uppercase;
//   font-size: 14px;
//   cursor: pointer;

//   &:hover {
//     background-color: #555;
//   }
// ;

// const Dropdown = styled.div
//   position: absolute;
//   display: none;
//   flex-direction: column;
//   background-color: rgba(0, 0, 0, 0.8); /* Transparent black background */
//   padding: 10px;
//   top: 100%;
//   left: 0;
//   width: 250px;
//   z-index: 100;

//   ${NavItem}:hover & {
//     display: flex;
//   }
// ;

// const DropdownItem = styled.div
//   padding: 8px 10px;
//   color: white;
//   &:hover {
//     background-color: #666; /* Hover color */
//   }
// ;

// const SearchIcon = styled(FaSearch)
//   cursor: pointer;
//   font-size: 20px;
//   color: white;
// ;

// const CloseSearchButton = styled(FaTimes)
//   cursor: pointer;
//   font-size: 20px;
//   color: white;
//   margin-left: 10px;
// ;

// const SearchInputWrapper = styled.div
//   display: ${({ showSearch }) => (showSearch ? "flex" : "none")};
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 100%; /* Position below the navbar */
//   left: 0;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0.8); /* Transparent black background */
//   padding: 10px;
//   height: 80vh;
//   z-index: 101;
//   transform: translateY(${({ showSearch }) => (showSearch ? "0" : "-100%")}); /* Slide in/out */
//   transition: transform 0.5s ease; /* Smooth sliding animation */
// ;

// const SearchInput = styled.input
//   width: 50%;
//   padding: 30px;
//   margin-left: 10px;
//     background-color: rgba(0, 0, 0, 0.8);
//   border-radius: 30px;
//   border: 1px solid #ccc;
//   font-size: 16px;
//   height: 40px;
//   color: white;
// ;

// const SearchButton = styled.button
//   padding: 20px 20px;
//   margin-left: 10px;
//   background-color: #444;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
  
//   &:hover {
//     background-color: #555;
//   }
// ;
// const CloseButton = styled(FaTimes)
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   font-size: 24px;
//   color: white;
//   cursor: pointer;
// ;
// const ErrorMessage = styled.div
//   color: red;
//   margin-top: 10px;
// ;

// function Header() {
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchError, setSearchError] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [activeFacility, setActiveFacility] = useState(null); // Store active facility for sub-dropdowns
//   const navigate = useNavigate(); // For navigation on search

//   const toggleSearchBar = () => {
//     setShowSearch((prev) => !prev);
//     setSearchQuery(""); // Clear query when opening search bar
//     setSearchError(""); // Clear error message when opening search
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//     setSearchError(""); // Clear error as the user types
//   };

//   const performSearch = () => {
//     // You can implement actual search logic here
//     if (!searchQuery.trim()) {
//       setSearchError("Please enter a search term.");
//     } else {
//       setSearchError(""); // Reset error if query is valid
//       // Example: Navigate to a search results page (or perform search logic)
//       navigate(/search?q=${searchQuery});
//     }
//   };

//   const handleHover = (dropdown) => {
//     setActiveDropdown(dropdown);
//   };

//   const handleFacilityHover = (facility) => {
//     setActiveFacility(facility); // Set the active facility for sub-dropdowns
//   };

//   const handleLinkClick = () => {
//     setShowSearch(false); // Close search if link is clicked
//     setActiveDropdown(null); // Close any open dropdown
//   };

//   const products = [
//     { name: "SILICONE - POLYESTER HOSES", link: "/siliconpolyester" },
//     { name: "TURBOCHARGER AND CAC HOSES", link: "/turbochargerhose" },
//     { name: "MARINE WET EXHAUST HOSES", link: "/marinewethose" },
//     { name: "EPDM RUBBER HOSES", link: "/epdm" },
//     { name: "ORGANIC RUBBER HOSES", link: "/organic" },
//     { name: "ASSEMBLY HOSES", link: "/Assembly" },
//     { name: "WIRE REINFORCED HOSES", link: "/wired" },
//     { name: "FUEL HOSES", link: "/fueltube" },
//     { name: "MOULDED HOSES", link: "/moulded" },
//   ];

//   const facilityItems = [
//     { name: "MANUFACTURING FACILITIES", link: "/manufacturing", subItems: [
//         { name: "   Hot Feed, Cold Feed & Co-Extrusion Extruders", link: "/hot-cold-feed" },
//         { name: "Auto Clave Vulcanizar", link: "/Auto-clave-vulcanizer" },
//         { name: " Dispersion Kneader to Internal Mixer & Stock Blenders", link: "/Dispersion-kneader" },
//         { name: "  3 Role Calendaring Machine", link: "/3-role-calendaring-machine" },
//         { name: "Compression-transfer-molding", link: "/  Compression Transfer Moulding" },
//         { name: "Rubber Mixing Mills", link: "/Rubber-mixing-mill" },
//         { name: " Knitting Machines", link: "/Knitting-machine" },
//     ]},
//     { name: "INHOUSE TESTING FACILITIES", link: "/inhouse", subItems: [
//         { name: " Moving Die Rheometer", link: "/Moving-Die-Rheometer" },
//         { name: " Burst Pressure Test Machine", link: "/Burst-pressure-test-machines" },
//         { name: " Ozone Test Chamber", link: "/Ozone-test-chamber" },
//         { name: "   UTM-1", link: "/UTM-tensil" },
//         { name: "    Heating Ovens", link: "/Heating-oven" },
//         { name: "   Muffle Furnace", link: "/Muffle-furnance" },
//     ]},
//   ];

//   return (
//     <HeaderContainer>
//       <TopSection  style={{backgroundColor:"black"}}>
//         <Logo>Hhak Trading</Logo>
//         <ContactInfo>
//           <span>+123 456 7890</span>
//           <span>info@hhak.com</span>
//           <span>Location</span>
//         </ContactInfo>
//       </TopSection>
//       <NavBar  style={{backgroundColor:"#1e202c",borderTop:"1px solid gray"}}>
//         <NavItem>
//           <Link to="/" style={{ color: 'white',fontWeight:"bold", textDecoration: 'none' }}>Home</Link>
//         </NavItem>
//         <NavItem>
//           <Link to="/aboutus" style={{ color: 'white', fontWeight:"bold",textDecoration: 'none' }}>About Us</Link>
//         </NavItem>
//         <NavItem
//           onMouseEnter={() => handleHover("products")}
//           onMouseLeave={() => setActiveDropdown(null)}
//         >
//           <Link to="/product" className="pflinks" style={{ color: "white",fontWeight:"bold", textDecoration: "none" }}>
//             PRODUCTS <FaChevronDown style={{ fontSize: "15px", marginLeft: "5px" }} />
//           </Link>
//           {activeDropdown === "products" && (
//             <Dropdown>
//               {products.map((product, index) => (
//                 <Link
//                   key={index}
//                   to={product.link}
//                   onClick={handleLinkClick}
//                   style={{ color: 'white', textDecoration: 'none', padding: "8px 10px",fontWeight:"bold", marginBottom: "5px" }}
//                 >
//                   {product.name}
//                 </Link>
//               ))}
//             </Dropdown>
//           )}
//         </NavItem>

//         <NavItem
//           onMouseEnter={() => handleHover("facilities")}
//           onMouseLeave={() => setActiveDropdown(null)}
//         >
//           <Link to="/facility" className="pflinks" style={{ color: "white",fontWeight:"bold", textDecoration: "none" }}>
//             FACILITY <FaChevronDown style={{ fontSize: "15px", marginLeft: "5px" }} />
//           </Link>
//           {activeDropdown === "facilities" && (
//             <Dropdown>
//               {facilityItems.map((facility, index) => (
//                 <div key={index}>
//                   <Link
//                     to={facility.link}
//                     onClick={handleLinkClick}
//                     style={{ color: 'white', textDecoration: 'none',fontWeight:"bold", padding: "20px 10px", marginBottom: "30px" }}
//                     onMouseEnter={() => handleFacilityHover(facility.name)} // Show sub-items on hover
//                   >
//                     {facility.name}
//                   </Link>
//                   {activeFacility === facility.name && (
//                     <Dropdown>
//                       {facility.subItems.map((subFacility, idx) => (
//                         <Link
//                           key={idx}
//                           to={subFacility.link}
//                           onClick={handleLinkClick}
//                           style={{ color: 'white', textDecoration: 'none', padding: "8px 10px",
//                             fontWeight:"bold", marginBottom: "5px" }}
//                         >
//                           {subFacility.name}
//                         </Link>
//                       ))}
//                     </Dropdown>
//                   )}
//                 </div>
//               ))}
//             </Dropdown>
//           )}
//         </NavItem>

//         <NavItem>
//           <Link to="/career" style={{ color: 'white', textDecoration: 'none',fontWeight:"bold", }}>Career</Link>
//         </NavItem>
//         <NavItem>
//           <Link to="/contact" style={{ color: 'white',fontWeight:"bold", textDecoration: 'none' }}>Contact</Link>
//         </NavItem>

//         <NavItem>
//           <SearchIcon onClick={toggleSearchBar} />
//         </NavItem>
//       </NavBar>

//       <SearchInputWrapper showSearch={showSearch}>
//       <CloseButton onClick={toggleSearchBar} /> {/* Close button */}
//         <SearchInput
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//         <SearchButton onClick={performSearch}>Search</SearchButton>
        
//         {searchError && <ErrorMessage>{searchError}</ErrorMessage>}
//       </SearchInputWrapper>
//     </HeaderContainer>
//   );
// }

// // export default Header;   
// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const HeaderContainer = styled.header`
//   display: flex;
//   flex-direction: column;
//   position: sticky;
//   top: 0;
//   background-color: #000;
//   color: white;
//   z-index: 1000;
// `;

// const TopSection = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: #222;
// `;

// const Logo = styled.div`
//   font-size: 24px;
//   font-weight: bold;
// `;

// const ContactInfo = styled.div`
//   display: flex;
//   gap: 15px;
// `;

// const NavBar = styled.nav`
//   display: flex;
//   justify-content: center;
//   background-color: #444;
//   padding: 10px 20px;
//   gap: 20px;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const NavItem = styled.div`
//   position: relative;
//   text-transform: uppercase;
//   font-size: 14px;
//   cursor: pointer;
//   color: white;

//   &:hover {
//     color: #aaa;
//   }
// `;

// const Dropdown = styled.div`
//   position: absolute;
//   display: none;
//   flex-direction: column;
//   background-color: #555;
//   padding: 10px;
//   top: 100%;
//   left: 0;
//   width: 200px;
//   z-index: 100;

//   ${NavItem}:hover & {
//     display: flex;
//   }
// `;

// const DropdownItem = styled(Link)`
//   text-decoration: none;
//   color: white;
//   padding: 8px 10px;
//   font-size: 14px;

//   &:hover {
//     background-color: #666;
//   }
// `;

// const HamburgerIcon = styled(FaBars)`
//   display: none;
//   font-size: 24px;
//   color: white;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 20px;
//     right: 20px;
//   }
// `;

// const Sidebar = styled.div`
//   position: fixed;
//   top: 0;
//   right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
//   width: 250px;
//   height: 100%;
//   background-color: #333;
//   padding: 20px;
//   transition: right 0.3s ease;
//   z-index: 100;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// const CloseSidebarIcon = styled(FaTimes)`
//   font-size: 24px;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 20px;
// `;

// const SidebarNavItem = styled.div`
//   margin-bottom: 20px;
// `;

// const SidebarLink = styled(Link)`
//   display: block;
//   text-decoration: none;
//   color: white;
//   padding: 10px;
//   border-radius: 5px;
//   background-color: #444;
//   font-size: 16px;

//   &:hover {
//     background-color: #555;
//   }
// `;

// const SidebarDropdown = styled.div`
//   display: ${({ isOpen }) => (isOpen ? "block" : "none")};
//   padding-left: 15px;
// `;

// const DropdownToggle = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 16px;
//   color: white;
//   padding: 10px;
//   background-color: #444;
//   border-radius: 5px;

//   &:hover {
//     background-color: #555;
//   }
// `;

// function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   const toggleDropdown = (name) => {
//     setOpenDropdown((prev) => (prev === name ? null : name));
//   };

//   const products = [
//     { name: "SILICONE - POLYESTER HOSES", link: "/siliconpolyester" },
//     { name: "TURBOCHARGER AND CAC HOSES", link: "/turbochargerhose" },
//     { name: "MARINE WET EXHAUST HOSES", link: "/marinewethose" },
//   ];

//   const facilities = [
//     { name: "MANUFACTURING FACILITIES", link: "/manufacturing" },
//     { name: "INHOUSE TESTING FACILITIES", link: "/inhouse" },
//   ];

//   return (
//     <HeaderContainer>
//       {/* Top Section */}
//       <TopSection>
//         <Logo>Hhak Trading</Logo>
//         <ContactInfo>
//           <span>+123 456 7890</span>
//           <span>info@hhak.com</span>
//           <span>Location</span>
//         </ContactInfo>
//       </TopSection>

//       {/* Navbar */}
//       <NavBar>
//         <NavItem>
//           <Link to="/" style={{ color: "white", textDecoration: "none" }}>
//             Home
//           </Link>
//         </NavItem>
//         <NavItem>
//           <Link to="/aboutus" style={{ color: "white", textDecoration: "none" }}>
//             About Us
//           </Link>
//         </NavItem>
//         <NavItem>
//           Products
//           <Dropdown>
//             {products.map((product, index) => (
//               <DropdownItem to={product.link} key={index}>
//                 {product.name}
//               </DropdownItem>
//             ))}
//           </Dropdown>
//         </NavItem>
//         <NavItem>
//           Facilities
//           <Dropdown>
//             {facilities.map((facility, index) => (
//               <DropdownItem to={facility.link} key={index}>
//                 {facility.name}
//               </DropdownItem>
//             ))}
//           </Dropdown>
//         </NavItem>
//         <NavItem>
//           <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
//             Contact
//           </Link>
//         </NavItem>
//       </NavBar>

//       {/* Hamburger Menu */}
//       <HamburgerIcon onClick={toggleSidebar} />

//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen}>
//         <CloseSidebarIcon onClick={toggleSidebar} />

//         <SidebarNavItem>
//           <SidebarLink to="/" onClick={toggleSidebar}>
//             Home
//           </SidebarLink>
//         </SidebarNavItem>

//         <SidebarNavItem>
//           <SidebarLink to="/aboutus" onClick={toggleSidebar}>
//             About Us
//           </SidebarLink>
//         </SidebarNavItem>

//         <SidebarNavItem>
//           <DropdownToggle onClick={() => toggleDropdown("products")}>
//             Products <FaChevronDown />
//           </DropdownToggle>
//           <SidebarDropdown isOpen={openDropdown === "products"}>
//             {products.map((product, index) => (
//               <SidebarLink to={product.link} key={index} onClick={toggleSidebar}>
//                 {product.name}
//               </SidebarLink>
//             ))}
//           </SidebarDropdown>
//         </SidebarNavItem>

//         <SidebarNavItem>
//           <DropdownToggle onClick={() => toggleDropdown("facilities")}>
//             Facilities <FaChevronDown />
//           </DropdownToggle>
//           <SidebarDropdown isOpen={openDropdown === "facilities"}>
//             {facilities.map((facility, index) => (
//               <SidebarLink to={facility.link} key={index} onClick={toggleSidebar}>
//                 {facility.name}
//               </SidebarLink>
//             ))}
//           </SidebarDropdown>
//         </SidebarNavItem>

//         <SidebarNavItem>
//           <SidebarLink to="/contact" onClick={toggleSidebar}>
//             Contact
//           </SidebarLink>
//         </SidebarNavItem>
//       </Sidebar>
//     </HeaderContainer>
//   );
// }

// export default Header;


import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import "./header.css";

// Styled components for the header
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: #000 !important;
  color: white;
  z-index: 1000;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #222;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 15px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #444;
  padding: 8px 20px;
  gap: 10px;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    display: none; /* Show on smaller screens */
  }
`;

const NavItem = styled.div`
  position: relative;
  padding: 10px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  top: 100%;
  left: 0;
  width: 250px;
  z-index: 100;

  ${NavItem}:hover & {
    display: flex;
  }
`;

const DropdownItem = styled.div`
  padding: 8px 10px;
  color: white;
  &:hover {
    background-color: #666;
  }
`;

const SearchIcon = styled(FaSearch)`
  cursor: pointer;
  font-size: 20px;
  color: white;
`;

const CloseSearchButton = styled(FaTimes)`
  cursor: pointer;
  font-size: 20px;
  color: white;
  margin-left: 10px;
`;

const SearchInputWrapper = styled.div`
  display: ${({ showSearch }) => (showSearch ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  height: 80vh;
  z-index: 101;
  transform: translateY(${({ showSearch }) => (showSearch ? "0" : "-100%")});
  transition: transform 0.5s ease;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 30px;
  margin-left: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  border: 1px solid #ccc;
  font-size: 16px;
  height: 40px;
  color: white;
`;

const SearchButton = styled.button`
  padding: 20px 20px;
  margin-left: 10px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;
const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

// Sidebar components
const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: block;

  &:hover {
    background-color: #444;
  }
`;

const SidebarNavItem = styled.div`
  padding: 10px;
`;

const DropdownToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: #444;
  }
`;

const SidebarDropdown = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding-left: 20px;
`;

// Sidebar Components (Hamburger and Sidebar)
const HamburgerIcon = styled(FaBars)`
  cursor: pointer;
  font-size: 24px;
  color: white;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseSidebarIcon = styled(FaTimes)`
  cursor: pointer;
  font-size: 24px;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #222;
  z-index: 100;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  padding-top: 60px;

  @media (min-width: 769px) {
    display: none; /* Hide sidebar on large screens */
  }
`;

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeFacility, setActiveFacility] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();

  const toggleSearchBar = () => {
    setShowSearch((prev) => !prev);
    setSearchQuery("");
    setSearchError("");
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setSearchError("");
  };

  const performSearch = () => {
    if (!searchQuery.trim()) {
      setSearchError("Please enter a search term.");
    } else {
      setSearchError("");
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleFacilityHover = (facility) => {
    setActiveFacility(facility);
  };

  const handleLinkClick = () => {
    setShowSearch(false);
    setActiveDropdown(null);
  };

  const products = [
    { name: "SILICONE - POLYESTER HOSES", link: "/siliconpolyester" },
    { name: "TURBOCHARGER AND CAC HOSES", link: "/turbochargerhose" },
    { name: "MARINE WET EXHAUST HOSES", link: "/marinewethose" },
    { name: "EPDM RUBBER HOSES", link: "/epdm" },
    { name: "ORGANIC RUBBER HOSES", link: "/organic" },
    { name: "ASSEMBLY HOSES", link: "/Assembly" },
    { name: "WIRE REINFORCED HOSES", link: "/wired" },
    { name: "FUEL HOSES", link: "/fueltube" },
    { name: "MOULDED HOSES", link: "/moulded" },
  ];

  const facilityItems = [
    {
      name: "MANUFACTURING FACILITIES",
      link: "/manufacturing",
      subItems: [
        { name: "Hot Feed, Cold Feed & Co-Extrusion Extruders", link: "/hot-cold-feed" },
        { name: "Auto Clave Vulcanizer", link: "/Auto-clave-vulcanizer" },
        { name: "Dispersion Kneader to Internal Mixer & Stock Blenders", link: "/Dispersion-kneader" },
        { name: "3 Role Calendaring Machine", link: "/3-role-calendaring-machine" },
        { name: "Compression-transfer-molding", link: "/Compression-Transfer-Moulding" },
        { name: "Rubber Mixing Mills", link: "/Rubber-mixing-mill" },
        { name: "Knitting Machines", link: "/Knitting-machine" },
      ],
    },
    {
      name: "INHOUSE TESTING FACILITIES",
      link: "/inhouse",
      subItems: [
        { name: "Moving Die Rheometer", link: "/Moving-Die-Rheometer" },
        { name: "Burst Pressure Test Machine", link: "/Burst-pressure-test-machines" },
        { name: "Ozone Test Chamber", link: "/Ozone-test-chamber" },
        { name: "UTM-1", link: "/UTM-tensil" },
        { name: "Heating Ovens", link: "/Heating-oven" },
        { name: "Muffle Furnace", link: "/Muffle-furnance" },
      ],
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <HeaderContainer>
      <TopSection style={{ backgroundColor: "black" }}>
        <Logo>Hhak Trading</Logo>
        <ContactInfo>
          <span>+123 456 7890</span>
          <span>info@hhak.com</span>
          <span>Location</span>
        </ContactInfo>
      </TopSection>
      <NavBar style={{ backgroundColor: "#1e202c", borderTop: "1px solid gray" }}>
        <NavItem>
          <Link to="/" style={{ color: 'white', fontWeight: "bold", textDecoration: 'none' }}>Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/aboutus" style={{ color: 'white', fontWeight: "bold", textDecoration: 'none' }}>About Us</Link>
        </NavItem>
        <NavItem
          onMouseEnter={() => handleHover("products")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link to="/product" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
            PRODUCTS <FaChevronDown style={{ fontSize: "15px", marginLeft: "5px" }} />
          </Link>
          {activeDropdown === "products" && (
            <Dropdown>
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={product.link}
                  onClick={handleLinkClick}
                  style={{ color: 'white', textDecoration: 'none', padding: "8px 10px", fontWeight: "bold", marginBottom: "5px" }}
                >
                  {product.name}
                </Link>
              ))}
            </Dropdown>
          )}
        </NavItem>

        <NavItem
          onMouseEnter={() => handleHover("facilities")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link to="/facility" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
            FACILITY <FaChevronDown style={{ fontSize: "15px", marginLeft: "5px" }} />
          </Link>
          {activeDropdown === "facilities" && (
            <Dropdown>
              {facilityItems.map((facility, index) => (
                <div key={index}>
                  <Link
                    to={facility.link}
                    onClick={handleLinkClick}
                    style={{ display:'flex',flexDirection:'column',color: 'white', textDecoration: 'none', fontWeight: "bold", padding: "10px 10px", marginBottom: "10px" }}
                    onMouseEnter={() => handleFacilityHover(facility.name)}
                  >
                    {facility.name}
                  </Link>
                  {activeFacility === facility.name && (
                    <Dropdown>
                      {facility.subItems.map((subFacility, idx) => (
                        <Link
                          key={idx}
                          to={subFacility.link}
                          onClick={handleLinkClick}
                          style={{ color: 'white', textDecoration: 'none', padding: "8px 10px", fontWeight: "bold", marginBottom: "5px" }}
                        >
                          {subFacility.name}
                        </Link>
                      ))}
                    </Dropdown>
                  )}
                </div>
              ))}
            </Dropdown>
          )}
        </NavItem>

        <NavItem>
          <Link to="/career" style={{ color: 'white', textDecoration: 'none', fontWeight: "bold" }}>Career</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" style={{ color: 'white', fontWeight: "bold", textDecoration: 'none' }}>Contact</Link>
        </NavItem>

        <NavItem>
          <SearchIcon onClick={toggleSearchBar} />
        </NavItem>
      </NavBar>

      <SearchInputWrapper showSearch={showSearch}>
      <CloseButton onClick={toggleSearchBar}
      
      
      />
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <SearchButton onClick={performSearch}>Search</SearchButton>
        {searchError && <ErrorMessage>{searchError}</ErrorMessage>}
      </SearchInputWrapper>

      <HamburgerIcon onClick={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen}>
        <CloseSidebarIcon onClick={toggleSidebar} />
        <SidebarNavItem>
          <SidebarLink to="/" onClick={toggleSidebar}>Home</SidebarLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarLink to="/aboutus" onClick={toggleSidebar}>About Us</SidebarLink>
        </SidebarNavItem>
        <SidebarNavItem>
  <DropdownToggle onClick={() => toggleDropdown("products")}>
    <SidebarLink to="/product" onClick={toggleSidebar}>Products</SidebarLink>
    <FaChevronDown />
  </DropdownToggle>
  <SidebarDropdown isOpen={openDropdown === "products"}>
    {products.map((product, index) => (
      <SidebarLink
        key={index}
        to={product.link}
        onClick={toggleSidebar}
      >
        {product.name}
      </SidebarLink>
    ))}
  </SidebarDropdown>
</SidebarNavItem>

      {/* Facility Dropdown with Sub-Dropdown */}
      <SidebarNavItem>
          <DropdownToggle onClick={() => toggleDropdown("facilities")}>
            <SidebarLink to="/facility" onClick={toggleSidebar}>Facility</SidebarLink>
            <FaChevronDown />
          </DropdownToggle>
          <SidebarDropdown isOpen={openDropdown === "facilities"}>
            {facilityItems.map((facility, index) => (
              <div key={index}>
                <SidebarLink to={facility.link} onClick={toggleSidebar}>
                  {facility.name}
                </SidebarLink>
                <SidebarDropdown isOpen={openDropdown === facility.name}>
                  {facility.subItems.map((subFacility, idx) => (
                    <SidebarLink key={idx} to={subFacility.link} onClick={toggleSidebar}>
                      {subFacility.name}
                    </SidebarLink>
                  ))}
                </SidebarDropdown>
              </div>
            ))}
          </SidebarDropdown>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarLink to="/career" onClick={toggleSidebar}>Career</SidebarLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarLink to="/contact" onClick={toggleSidebar}>Contact</SidebarLink>
        </SidebarNavItem>
      </Sidebar>
    </HeaderContainer>
  );
}

export default Header;
