import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} sticky="top" className="navbar-dark" bg="dark" expand="lg">
      <Container>        
          <Navbar.Toggle aria-controls="basic-navbar-nav"
           className="ms-auto my-2"
           onClick = {() => setExpanded(expanded ? false : "expanded")}/>
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
                <NavLink
                className='nav-link' 
                to="/" 
                onClick={() => setExpanded(false)}>
                Home </NavLink>   

                <NavLink
                className='nav-link' 
                to="/about" 
                onClick={() => setExpanded(false)}>
                About Me </NavLink>

                <NavLink
                className='nav-link' 
                to="/projects" 
                onClick={() => setExpanded(false)}>
                Projects </NavLink>

                <NavLink
                className='nav-link' 
                to="/contact" 
                onClick={() => setExpanded(false)}>
                Contact </NavLink>        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;