import React from 'react';
import './About.css'
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { Nav } from 'react-bootstrap';

const About = () => {
    return (
      <>
      <h1 className="color mt-5 pt-5" id='about'>ABOUT ME</h1>
        <div className="banner container-fluid">
    <div className="icon">
      <div className="row pt-5 pb-3">
        <div className="col-lg-1 col-sm-12 sidebar1">
        <div class="sidebar">
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
          href="https://www.facebook.com/profile.php?id=100005727019232"
          target="_blank"
          >
          <BsFacebook className="text-dark h1"></BsFacebook>
          </Nav.Link>
        </div>
      </div>
        <div className="col-lg-4">
          <img
            style={{ width: "100%" }}
            className=" pb-5"
            src="https://i.ibb.co/QMthHQc/150574144-1719260724941478-8433641431005521397-n.jpg"
            alt=""
          />
        </div>
        <div
          className="col-lg-6 p-3 "
          style={{ textAlign: "center"}}
        >
          <div>
          <h1 className='mb-3 text-primary animate__animated animate__flip' >I am Emon Islam </h1>
          <h4 className='mt-5'>
            I'm a passionate web designer and developer.I believe in hard
            work.I am doing my work honestly.I like to learn different
            things and want to build a foundation of my knowledge
          </h4>
          </div>
          </div>
        </div>
      </div>
    </div>
  
  </>
    );
};

export default About;