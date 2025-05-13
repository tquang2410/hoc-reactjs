import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";
import React from 'react'
const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
      // Điều hướng đến trang đăng nhập
        navigate('/login');
    }
  return (
    <Navbar bg="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Hoc React</Navbar.Brand> */}
        <NavLink to="/" className='navbar-brand'>Wang hoc react</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/users" className='nav-link'>User</NavLink>
            <NavLink to="/admins" className='nav-link'>Admin</NavLink>
           
          </Nav>
          <Nav>
            <button className='btn-login' onClick={() => handleLogin()}> Login</button>
            <button className='btn-signup'> SignUp</button>
          {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item >Log in</NavDropdown.Item>
              <NavDropdown.Item > Log Out  </NavDropdown.Item>
                <NavDropdown.Item >Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;