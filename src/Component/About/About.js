import React from 'react';
import './About.css'
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  AOS.init();
    return (
      <Container>
          <h1 className="color mt-5 pt-5">ABOUT ME</h1>
  <Row>
    <Col sm={12} md={6}><img style={{ width: "100%" }} src="https://i.ibb.co/QMthHQc/150574144-1719260724941478-8433641431005521397-n.jpg" alt="" /></Col>
    <Col sm={12} md={6}><h1 className='mb-3 text-primary animate__animated animate__flip' >I am Emon Islam </h1>
  <h4 className='mt-5'> I'm a passionate web designer and developer.I believe in hard
  work.I am doing my work honestly.I like to learn different
  things and want to build a foundation of my knowledge.</h4>
  </Col>
  </Row>
  
</Container>
    );
};

export default About;