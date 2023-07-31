import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/Navigation.css';
import logo from '../assets/img/logo.png'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const NavApp = () => {

    return (
        <>
            <Navbar collapseOnSelect className='Nav' bg='dark' expand='md' sticky='top'>
                <Navbar.Brand as={Link} to='/' className="brandname">
                    <img className='logo'
                        src={logo}
                        width={100}
                        alt='Link King Fishing'
                    />
                </Navbar.Brand>
                <Container className='nav-container'>
                    <NavbarCollapse className='nav-collapes' id='navbar'>
                        <Nav className='nav-links ml-auto'>

                            <Nav.Link as={Link} to='/'>
                                About Us
                            </Nav.Link>
                            <Nav.Link as={Link} to='/products'>
                                Our Product
                            </Nav.Link>
                            <Nav.Link as={Link} to='/merchandise'>
                                Our Merchandise
                            </Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </>
    )
};

export default NavApp