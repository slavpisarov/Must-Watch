import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.css'

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Must Watch</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <NavDropdown title="Catalog" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Movies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TV Series</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Add media </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link href="#deets">Register</Nav.Link>
            <Nav.Link href="#deets" disabled>user@abv.com</Nav.Link>
            <Nav.Link href="#deets">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
