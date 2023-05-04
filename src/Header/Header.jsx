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
                  <Container className='d-flex align-items-center'>
                        <Navbar.Brand style={{fontSize:"40px",color:"orange"}} className='fw-bold fst-italic flex-grow-1 '>Quisinne De French</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                              
                                    <Link className='btn btn-info text-decoration-none mx-2' to={'/'}>Home</Link>


                             
                              
                                    <Link className='btn btn-info text-decoration-none mx-2' to={'/blog'}>Blog</Link>
                                    {
                                          user ?
                                                <p><img style={{ width: "50px" }} className=' rounded-circle mx-2' src={user.photoURL} alt="" title={user.displayName}/> <Link className='btn btn-danger' onClick={handleLogout}>LogOut</Link></p>
                                                
                                                : <Link className='btn btn-primary mx-2' to={'/login'}>Login</Link>
                                    }

                              
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;