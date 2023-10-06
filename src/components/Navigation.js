import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/css/Navigation.css';
import logo from '../assets/img/logo.jpg'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Footer from '../components/Footer';

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
                            <Nav.Link as={Link} to="https://www.facebook.com/LingKingFishing">
                                Order Fish
                            </Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </>
    )
};

export default NavApp