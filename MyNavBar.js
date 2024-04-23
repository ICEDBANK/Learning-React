// Import necessary dependencies from react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


// Define MyNavBar component
function MyNavBar() {
  // Render JSX markup for navigation bar
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        {/* Navbar Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navbar Collapse */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Navigation Links */}
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/Blog'>Blog</Nav.Link>
            <Nav.Link as={NavLink} to='/About'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/Products'>Products</Nav.Link>
            <Nav.Link as={NavLink} to='/MyTable'>My Table</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Export MyNavBar component
export default MyNavBar;
