import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';

const Header = () => {
      
      const { user, logOut } = useContext(Authcontext)
      const handleLogout=()=>{
            logOut()
            .then(()=>{})
            .catch((e)=>{
                  console.log(e.message);
            })
      }
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
                                                <p><img style={{ width: "50px" }} className=' rounded-circle' src={user.photoURL} alt="" /> <Link onClick={handleLogout}>LogOut</Link></p>
                                                
                                                : <Link to={'/login'}>Login</Link>
                                    }

                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;