import React from 'react';
import { Card, Carousel, Col} from 'react-bootstrap';
import './project.css'


const Project = (props) => {
  
    const {name, details, img1, img2, img3, liveside, clientside, Serverside, tech}=props.project
    return (
        <Col className='mt-5 pt-5'>
      <Card>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    
    
  </Carousel.Item>
</Carousel>
        <Card.Body >
            <h2>{name}</h2>
            <p>{details}</p>
            <h5 className="my-4">Technology used:{tech}</h5>
            <div className='link'>
              <a href={liveside} target="_blank">Live Site</a>
              <a href={clientside} target="_blank"> Client Site</a>
              <a href={Serverside} target="_blank">Server Site</a>
              </div>
            </Card.Body>
      </Card>
    </Col>
    );
};

export default Project;