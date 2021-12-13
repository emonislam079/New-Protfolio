import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="/home">Emon Islam</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/skills">Skills</Nav.Link>
                        <Nav.Link as={HashLink} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={HashLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact Me</Nav.Link>              
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;