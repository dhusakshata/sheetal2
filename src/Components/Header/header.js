import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, NavDropdown } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Logo from "../../Images/logo1.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header">
      <div  className="main-header">
      <div href="/" className="logo">
            <img
            src={Logo}
              alt="Logo"
              className="logo-image"
            />
          </div>

          {/* Contact Email for Larger Screens */}
          <div className="contact-email d-none d-lg-block">
            <a href="mailto:info@example.com">info@example.com</a>
          </div>

      </div>
      <Navbar expand="lg" className="navbar-custom">
        <Container fluid>
          {/* Logo */}
        
          {/* Toggle Button for Smaller Screens */}
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="menu-toggle"
            onClick={handleShow}
          >
            <AiOutlineMenu size={24} />
          </Navbar.Toggle>

          {/* Sidebar for Navbar Items */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
            style={{color:"white"}}
          >
            <Offcanvas.Header closeButton style={{color:"white"}}>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>

                {/* Product Dropdown */}
                <NavDropdown title="Product" id="product-dropdown">
                  <NavDropdown.Item href="/siliconpolyester">SILICONE - POLYESTER HOSES</NavDropdown.Item>
                  <NavDropdown.Item href="/turbochargerhose">  TURBOCHARGER AND CAC HOSES</NavDropdown.Item>
                  <NavDropdown.Item href="/epdm">     MARINE WET EXHAUST HOSES</NavDropdown.Item>
                  <NavDropdown.Item href="/organic">ORGANIC RUBBER HOSES</NavDropdown.Item>
                  <NavDropdown.Item href="/Assembly">ASSEMBLY HOSES</NavDropdown.Item>
                  <NavDropdown.Item href="/wired">WIRE REINFORCED HOSES</NavDropdown.Item>
                  <NavDropdown.Item href="/fueltube">FUEL HOSES</NavDropdown.Item>
                  <NavDropdown.Item href="/moulded">MOULDED HOSES</NavDropdown.Item>
                  <NavDropdown.Item href="/marinewethose">     MARINE WET EXHAUST HOSES</NavDropdown.Item>
                </NavDropdown>

                {/* Facility Dropdown */}
                <NavDropdown title="Facility" id="facility-dropdown">
  <NavDropdown.Item href="#">Facility 1</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown
    title="Sub Facility 1"
    id="subfacility1-dropdown"
    className="nested-dropdown"
  >
    <NavDropdown.Item href="/facility1/sub1">Sub 1</NavDropdown.Item>
    <NavDropdown.Item href="/facility1/sub2">Sub 2</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown
    title="Sub Facility 2"
    id="subfacility2-dropdown"
    className="nested-dropdown"
  >
    <NavDropdown.Item href="/facility2/sub1">Sub 1</NavDropdown.Item>
    <NavDropdown.Item href="/facility2/sub2">Sub 2</NavDropdown.Item>
  </NavDropdown>
</NavDropdown>


                <Nav.Link href="/news">News & Blogs</Nav.Link>
                <Nav.Link href="/career">Career</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
