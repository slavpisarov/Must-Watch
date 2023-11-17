import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand className={styles.brand} as={Link} to="/">
          Must Watch
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="My List" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/catalog/movies">Movies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/catalog/tv-series">TV Series</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/create">Add media </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link disabled>Welcome: user@abv.com</Nav.Link>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
