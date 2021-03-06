import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './skill.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = ({ title, language }) => {
    AOS.init();
    return (
        <Row className="text-dark mb-5 d-flex align-items-center">
            <Col xs={12} md={2}>
                <h2 className="text-start">{title}</h2>
            </Col>
            <Col xs={12} md={10} className="d-flex align-items-center flex-wrap ps-4">
                {
                    language.map(item => {
                        return (
                            <div  data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration='1500'
                            className="d-flex flex-column me-5 mb-3 Shadows ">
                                <img src={item.img} width="50" height='50'alt={item.name} />
                                <h4>{item.name}</h4>
                            </div>
                        )
                    })
                }


            </Col>
        </Row>
    );
};

export default Skill;