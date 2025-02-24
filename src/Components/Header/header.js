
import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logos from "../../Images/logo2.webp";
import { useTranslation } from "react-i18next";
import "../../i18n"; // Import your i18n configuration
import { BsArrowDownCircle } from "react-icons/bs";

import {
  FaPhoneAlt,
 FaEnvelope,
 
} from 'react-icons/fa';

import "./header.css";

// Styled components for the header
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;

  top: 0;
  background-color: #000 !important;
  color: white;
  z-index: 1000;
    font-family: 'Poppins', sans-serif;
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


    @media (max-width: 768px) {
    display: flex; /* Show on smaller screens */
    flex-direction:column;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #444;
  padding: 8px 20px;
  gap: 10px;
  position: relative;
  z-index: 1010;
  font-size:14px;

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
  z-index: 1010;
  &:hover {
    background-color: #555;
  }
`;

const DropdownItems = styled.div`
  font-size: 14px;
  position: absolute;
  display: none;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  top: 100%;
  left: 0;
  width: 250px;
    z-index: 1010;
  z-index: 1000000;

  ${NavItem}:hover & {
    display: flex;
    width: 300px;
  }

  .dropdown-item {
    padding: 8px 10px;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: left;
    cursor: pointer;
    color: white;
    text-decoration: none;
      z-index: 1010;
    background-color: transparent;  /* Default background */
    transition: background-color 0.3s ease;  /* Smooth transition for background color */
  }

  .dropdown-item:hover {
    background-color: #555 !important;  /* Change to your desired hover color */
  }
`;

//Facility dropdowns
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: auto;
    z-index: 1010;
`;

const DropdownButton = styled.div`
  padding: 10px 15px;
  background-color: #1e202c;
  color: white;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 101;
  &:hover {
    background-color: #555;
  }
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8) !important;
 
  z-index: 1010;
  padding: 10px;
  width: 250px;

`;

const DropdownItem = styled.div`
  position: relative;
  padding: 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
 z-index: 1010;
  &:hover {
    background-color: #555;
  }
`;

const SubDropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 100%;
 background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1010;
  padding: 10px;
  width: 250px;
  
`;
//


const SearchIcon = styled(FaSearch)`
  cursor: pointer;
  font-size: 20px;
  color: white; 
    z-index: 10000;
`;


const SearchInputWrapper = styled.div`
  display: ${({ showSearch }) => (showSearch ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 150px; 
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  height: calc(100vh - 70px); /* Subtract the navbar height from the full viewport height */
  z-index: 100;
  transform: translateY(${({ showSearch }) => (showSearch ? "0" : "-100%")});
  transition: transform 0.5s ease;
`;


const SearchInput = styled.input`
  width: 50%;
  padding: 5px;

  margin-left: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  border: 1px solid #ccc;
  font-size: 16px;
  height: 40px;
  color: white;
  z-index: 1010;
  margin-top:-200px;
`;

const SearchButton = styled.button`
  padding: 10px 10px;
  margin-left: 10px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
font-size:16px;
  z-index: 101;
   margin-top:-200px;
  &:hover {
    background-color: #555;
  }
`;
const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 30px;
  right: 60px;
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

const SidebarSubDropdown = styled.div`
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

//For polylanguage




function Header() {


  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };




  const { t } = useTranslation();


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
// Search functionality
  const data = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Products", link: "/Product" },
    { id: 3, name: "Facilities", link: "/facilities" },
    { id: 4, name: "Careers", link: "/career" },
    { id: 5, name: "About Us", link: "/aboutus" },
    { id: 6, name: "Contact Us", link: "/contact" },
    { id: 7, name: "Manufacturing", link: "/manufacturing" },
    { id: 8, name: "Inhouse", link: "/inhouse" },

    //Product 
    { id: 9, name: "Silicon Polyester", link: "/siliconpolyester" },
    { id: 10, name: "Turbocharger", link: "/turbochargerhose" },
    { id: 11, name: "Marine Wet Hose", link: "/marinewethose" },
    { id: 12, name: "EPDM", link: "/epdm" },
     { id: 13, name: "Organic", link: "/organic" },
    { id: 14, name: "Assembly", link: "/Assembly" },
    { id: 15, name: "Wired Reinforced", link: "/wired" },
   
    { id: 16, name: "Fuel Tube", link: "/Fueltube" },

    { id: 17, name: "Moulded", link: "/moulded" },

   
  
    // Manufacturing facilities
    { id: 17, name: "hot-cold-feed", link: "/hot-cold-feed" },
    { id: 18, name: "Dual head extruders", link: "/Dual-head-extruders" },

    { id: 19, name: "Auto clave vulcanizer", link: "/Auto-clave-vulcanizer" },

    { id: 20, name: "Dispersion kneader", link: "/Dispersion-kneader" },

    { id: 21, name: "3 roll calendaring machine", link: "/3-role-calendaring-machine" },

    { id: 22, name: "Compression transfer moulding", link: "/Compression-transfer-molding" },
    { id: 23, name: "Rubber mixing mill", link: "/Rubber-mixing-mill" },
    { id: 24, name: "Knitting machine", link: "/Knitting-machine" },
    { id: 25, name: "Braiding Machines", link: "/Braiding-Machines" },
  
    // Inhouse facilities
    { id: 27, name: "Moving Die Rheometer", link: "/Moving-Die-Rheometer" },
    { id: 28, name: "Burst pressure test machines", link: "/Burst-pressure-test-machines" },
    { id: 29, name: "Ozone test chamber", link: "/Ozone-test-chamber" },
    { id: 30, name: "UTM tensil", link: "/UTM-tensil" },
    { id: 31, name: "Heating oven", link: "/Heating-oven" },
    { id: 32, name: "Muffle furnance", link: "/Muffle-furnance" },
  ];
  
  // performSearch function
  const performSearch = () => {
    if (!searchQuery.trim()) {
      setSearchError("Please enter a search term.");
    } else {
      setSearchError("");
      const query = searchQuery.trim().toLowerCase();
  
      // Find the corresponding route from the data array
      const matchingItem = data.find(item => 
        item.name.toLowerCase().includes(query) // Check if the query matches part of the name
      );
  
      if (matchingItem) {
        // If an item is found, navigate to its link
        navigate(matchingItem.link);
      } else {
        // Default behavior: search results page
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      }
  
      setShowSearch(false);
    }
  };
  
  
  //

  const handleHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleFacilityHover = (facility) => {
    setActiveFacility(facility);
  };

  const handleLinkClick = () => {
    setShowSearch(false);
    setActiveDropdown(null);
    setIsDropdownOpen(false);
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
// facility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const facilityItems = [
    {
      name: "MANUFACTURING FACILITIES",
      link: "/manufacturing",
      subItems: [
        { name: "Hot Feed, Cold Feed & Co-Extrusion Extruders", link: "/hot-cold-feed" },
        { name: "Auto clave vulcanizer", link: "/Auto-clave-vulcanizer" },
        { name: "Dispersion Kneader to Internal Mixer & Stock Blenders", link: "/Dispersion-kneader" },
        { name: "3 Roll Calendaring Machine", link: "/3-role-calendaring-machine" },
        { name: "Compression-transfer-moulding", link: "/Compression-transfer-molding" },
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
  const toggleSubDropdown = (name) => {
    setActiveSubDropdown((prev) => (prev === name ? null : name));
  };
  return (
    <HeaderContainer>
      <TopSection style={{ backgroundColor: "black" }}>
        <Logo><img 
          src={Logos} 
          alt="Logo" 
          style={{ height: "70px", marginRight: "10px" }} 
        />
        </Logo>
        <ContactInfo>
          <span> <a href="tel:+ 91 -20 -27130244 " className="Contact-item">
              <FaPhoneAlt className="icon" />  +91 -20 -27130244 ,+91 -20 -27130794
             </a></span>
          <span>
            <a href="mailto:sheetalrubber@gmail.com" className="Contact-item">
              <FaEnvelope className="icon" /> sheetalrubber@gmail.com
             </a></span>
        
        </ContactInfo>  
      </TopSection>
      <NavBar style={{ backgroundColor: "#1e202c", borderTop: "1px solid gray" }}>
      <div className="scroll-down" onClick={handleScrollToBottom}>
                     <BsArrowDownCircle size={40}  style={{color:"white",marginTop:"-30px"}} />
                    </div>
        <NavItem>
          <Link to="/" style={{ color: 'white', fontWeight: "bold", textDecoration: 'none' }}>   {t("home")}</Link>
        </NavItem>
        <NavItem>
          <Link to="/aboutus" style={{ color: 'white', fontWeight: "bold", textDecoration: 'none' }}>   {t("about")}</Link>
        </NavItem>
        
        <NavItem
  onMouseEnter={() => handleHover("products")}
  onMouseLeave={() => setActiveDropdown(null)}
>
  <Link
    to="/product"
    style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}
  >
    PRODUCTS <FaChevronDown style={{ fontSize: "15px", marginLeft: "5px" }} />
  </Link>
  {activeDropdown === "products" && (
    <DropdownItems className="Product-dropdown">
      {products.map((product, index) => (
        <div
          key={index}
          className="dropdown-item"
        >
          <Link
            to={product.link}
            onClick={handleLinkClick}
            style={{
              color: "inherit", // Inherit text color from parent
              textDecoration: "none",
              display: "block", // Ensures full area is clickable
            }}
          >
            {product.name}
          </Link>
        </div>
      ))}
    </DropdownItems>
  )}
</NavItem>




<DropdownContainer
      onMouseLeave={() => {
        setIsDropdownOpen(false);
        setActiveSubDropdown(null);
      }}
    >
      <DropdownButton onMouseEnter={() => setIsDropdownOpen(true)}>
        FACILITY <FaChevronDown />
      </DropdownButton>

      <DropdownMenu isOpen={isDropdownOpen}>
        {facilityItems.map((facility, index) => (
          <DropdownItem
            key={index}
            onMouseEnter={() => setActiveSubDropdown(facility.name)}
            onMouseLeave={() => setActiveSubDropdown(null)}
          >
            <Link to={facility.link} style={{ color: "white", textDecoration: "none" }} 
               onClick={handleLinkClick}
            >
              {facility.name}
              
            </Link>

            <SubDropdownMenu isOpen={activeSubDropdown === facility.name}>
              {facility.subItems.map((subItem, idx) => (
                <DropdownItem key={idx}>
                  <Link to={subItem.link} style={{ color: "white", textDecoration: "none" }}
                    onClick={handleLinkClick} 
                  >
                    {subItem.name}
                  </Link>
                </DropdownItem>
              ))}
            </SubDropdownMenu>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>

        <NavItem>
          <Link to="/career" style={{ color: 'white', textDecoration: 'none', fontWeight: "bold" }}>Career</Link>
        </NavItem>
        <NavItem>
          <Link to="/contactus" style={{ color: 'white', fontWeight: "bold", textDecoration: 'none' }}>Contact</Link>
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

  
<SidebarNavItem>
  <DropdownToggle onClick={() => toggleDropdown("facilities")}>
    <SidebarLink to="/facility" onClick={toggleSidebar}>
      Facility
    </SidebarLink>
    <FaChevronDown className={`icon ${openDropdown === "facilities" ? "rotate-180" : ""}`} />
  </DropdownToggle>

  {/* Main Dropdown */}
  <SidebarDropdown isOpen={openDropdown === "facilities"}>
    {facilityItems.map((facility, index) => (
      <div key={index} className="facility-item">
        {/* Main Facility Item */}
        <DropdownToggle onClick={() => toggleDropdown(facility.name)}>
          <SidebarLink to={facility.link} onClick={toggleSidebar}>
            {facility.name}
          </SidebarLink>
          <FaChevronDown
            className={`icon ${openDropdown === facility.name ? "rotate-180" : ""}`}
          />
        </DropdownToggle>

        {/* Sub-Dropdown */}
        <SidebarDropdown isOpen={openDropdown === facility.name}>
          {facility.subItems.map((subFacility, idx) => (
            <SidebarLink key={idx} to={subFacility.link} onClick={toggleSidebar} className="subitem">
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
          <SidebarLink to="/contactus" onClick={toggleSidebar}>Contact</SidebarLink>
        </SidebarNavItem>
      </Sidebar>
    </HeaderContainer>
  );
}

export default Header;

