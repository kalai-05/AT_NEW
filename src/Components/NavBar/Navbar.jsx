import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

function NavBar() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" bg-[#6B3CC9]">
          <Container>
            <Navbar.Brand href="/" className="flex items-end gap-2 ">
              <img src={logo} alt="" className=" w-40" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className=" bg-[#6B3CC9] border-none "
            >
              <img src={menu} alt="" className="w-10 " />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  HOME
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=" ">
                <Nav className="justify-content-end flex-grow-1 text-xl sm:text-black  md:text-lg  gap-4 ">
                  <Nav.Link className="md:text-white  lg:text-white  " href="/">
                    SERVICES
                  </Nav.Link>
                  <Nav.Link className="md:text-white  lg:text-white " href="/">
                    ABOUT US
                  </Nav.Link>
                  <Nav.Link className="md:text-white  lg:text-white  " href="/">
                    CONTACT US
                  </Nav.Link>
                  <Nav.Link className="md:text-white  lg:text-white " href="/">
                    CAREERS
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
