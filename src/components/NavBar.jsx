import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="logo192.png" alt="logo image" width={"30px"}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Product" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Product 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Product 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Product 3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Our Story</Nav.Link>
            <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Resource 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Resource 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Resource 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button className="btn1">Book a demo</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
