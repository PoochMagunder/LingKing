import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/Navigation.css';
import logo from '../assets/img/Screenshot (4).png'

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
                    <Navbar.Toggle className='nav-button' aria-controls='navbar' />
                    <Navbar.Collapse className='nav-collapse' id='navbar'>
                        <Nav className='nav-links ml-auto'>
                            <>
                                <Nav.Link as={Link} to='/'>
                                    About Us
                                </Nav.Link>
                                <Nav.Link as={Link} to='/projects'>
                                    Order Now
                                </Nav.Link>
                            </>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default NavApp