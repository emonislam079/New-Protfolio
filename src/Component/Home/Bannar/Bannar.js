import React from 'react';
import { Col, Container, Nav, Row, Button } from 'react-bootstrap';
import './Bannar.css'
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


const Bannar = () => {
    return (
        <div id='bannar'>
           <Container className="pt-5">
                <Row>
                    <Col xs={12} md={6}>
                        <div className="p-5 ps-0">
                            <img src="https://i.ibb.co/QMthHQc/150574144-1719260724941478-8433641431005521397-n.jpg" className="w-100 border border-primary border-5 rounded-circle" alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="ms-5 pt-5">
                            <h2 className="text-dark text-start heading">Hi, from</h2>
                            <h1 className="text-primary ms-5 text-start heading animate__animated animate__fadeInRight">Emon Islam</h1>
                            <h3 className="text-dark text-start ms-5 ps-5 description"> 
                                (Front-End Developer)
                            </h3>
                            <div className="mt-5 d-flex justify-content-center">
                                <Nav.Link
                                    className=" ps-0"
                                    href="https://www.linkedin.com/in/emon-i-440842a4/"
                                    target="_blank"
                                >
                                    <GrLinkedin className="text-dark h1 "></GrLinkedin>
                                </Nav.Link>

                                <Nav.Link
                                    href="https://github.com/emonislam079"
                                    target="_blank"
                                >
                                    <FaGithub className="text-dark h1"></FaGithub>
                                </Nav.Link>
                                <Nav.Link
                                    href="mailto:emonislam079@gmail.com"
                                    target="_blank"
                                >
                                <SiGmail className="text-dark h1"></SiGmail>
                                </Nav.Link>

                            </div>
                            <div className="mt-2 d-flex justify-content-center">
                                <Button className="me-4 bg-primary rounded border-0">
                                    <Nav.Link
                                        className="text-light"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1dhBartTI_nPnBNtz1R-GnTKgVmuPA0D9/view?usp=sharing">Download Resume</Nav.Link>
                                </Button>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
};

export default Bannar;