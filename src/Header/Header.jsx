import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';



const Header = () => {

      const { user, logOut } = useContext(Authcontext)
      const handleLogout = () => {
            logOut()
                  .then(() => { })
                  .catch((e) => {
                        console.log(e.message);
                  })
      }
      return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                  <Container className='d-flex align-items-center'>
                        <Navbar.Brand style={{ fontSize: "40px", color: "orange" }} className='fw-bold fst-italic flex-grow-1 '>Quisinne De French</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                              <ActiveLink  to={'/'}>Home</ActiveLink>





                              <ActiveLink  to={'/blog'}>Blog</ActiveLink>

                              {
                                    user ?
                                          <p><img style={{ width: "50px" }} className=' rounded-circle mx-2' src={user.photoURL} alt="" title={user.displayName} /> <Link className='btn btn-secondary' onClick={handleLogout}>LogOut</Link></p>

                                          : <ActiveLink  to={'/login'}>Login</ActiveLink>
                              }


                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;