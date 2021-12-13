import React from 'react';
import { Card, Carousel, Col, Button } from 'react-bootstrap';

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
    <Carousel.Caption>
      <h3>{name}</h3>
      <p>{details}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>{name}</h3>
      <p>{details}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>{name}</h3>
      <p>{details}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Card.Body >
          <Card.Text className="my-3">
            {details}
            <h5 className="my-3">Technology used:{tech}</h5>
            
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Project;