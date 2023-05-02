import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
      
      const user = null
      return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                  <Container>
                        <Navbar.Brand href="#home">Quisinne De French</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                    <Link to={'/'}>Home</Link>


                              </Nav>
                              <Nav>
                                    <Nav.Link href="#deets">Blog</Nav.Link>
                                    {
                                          user ?
                                                <p>User Picture</p>
                                                : <Link to={'/login'}>Login</Link>
                                    }
                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;