// Import necessary dependencies from react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {/* NavDropdown */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {/* Dropdown Items */}
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              {/* Dropdown Divider */}
              <NavDropdown.Divider />
              {/* Dropdown Item */}
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Export MyNavBar component
export default MyNavBar;
