import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
           <Navbar
            collapseOnSelect
            expand="lg"
            style={{ backgroundColor: '#000' }}
            variant="dark"
            className="border-bottom"
            fixed="top"

        >
            <Container>
                <Navbar.Brand as={HashLink} to="/home">Emon Islam</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/home#bannar">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="#skills">Skills</Nav.Link>
                        <Nav.Link as={HashLink} to="#contactForm">Contact Me</Nav.Link>
                        <Nav.Link target="_blank" href="https://drive.google.com/file/d/1x0r8YeI1cGs_7Gb_aG6KCGntuifxDB1A/view?usp=sharing">Download Resume</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;