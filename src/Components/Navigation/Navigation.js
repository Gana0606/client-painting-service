import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Assets/logo.png';
import './Navigation.css';


const Navigation = () => {
    return (
        <div>
            <Navbar fixed="top" bg="dark" data-bs-theme="dark" expand="md">
                <Container>
                    <Navbar.Brand style={{ fontSize: '45px' }} as={Link} to="/" >
                        <img
                            alt=""
                            src={logo}
                            width="100"
                            height="60"
                            className="d-inline-block align-top"
                        />
                        BillyBoy</Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar className="second-navbar" fixed="top" bg="light" data-bs-theme="light" expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center navbar-items">
                        <Nav className="ml-auto mt-2">
                            <Nav.Link as={Link} className="mr-4" to="/">Home</Nav.Link>
                            <Nav.Link as={Link} className="mr-4" to="/about">About</Nav.Link>
                            <Nav.Link as={Link} className="mr-4" to="/projects">Project</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;