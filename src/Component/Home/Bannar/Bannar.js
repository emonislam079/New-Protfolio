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
                    <Col xs={12} md={12}>
                        <div className="ms-5 pt-5 align-middle" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration='2000'>
                            <h2 className="text-dark heading">Hi, from</h2>
                            <h1 className="text-primary ms-5  heading animate__animated animate__fadeInRight">Emon Islam</h1>
                            <h3 className="text-dark ms-5 ps-5 description"> 
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
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import { Button, Container } from '@mui/material';
// import './Home.css';
// import { Link } from 'react-router-dom';
// import Typical from 'react-typical'
// import AOS from 'aos';
// import 'aos/dist/aos.css';


// const Home = () => {
//   React.useEffect(() => {
//     AOS.init();
// })
//     return (
//       <div className='home-container'>
        
//         <Container>
//             <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} className='home-text' >
//         <Grid item xs={12} md={12} data-aos="zoom-in"
//      data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration='2000'>
//         
//           <h1>Hi, I am</h1>
//           <h1 style={{'color': 'aquamarine'}}>Ahmed Jafrul Islam</h1>
//           <h2>
//             <Typical
//             loop={Infinity}
//             steps={
//               [
//                 "Full Stack Web Developer",
//                 2000,
//                 "Front-End Web Developer",
//                 2000,
//                 "Mern Stack Web Developer",
//                 2000,
//                 "React Developer",
//                 2000
//               ]
//             }
//             />
//           </h2>
//           <div className='cta'>
//           <Link id='home-link'to=''>Download Resume</Link>
//           </div>
//         </Grid>
//       </Grid>
//     </Box>
//         </Container>
//         </div>
//     );
// };

// export default Home;

// // .home-container {
// //     font-family: "Montserrat", sans-serif;
// //     background-color: #282c34;
// //   }
  
// //   .home-text {
// //     text-align: center;
// //     align-items: center;
// //     height: 92vh;
// //     margin: auto;
// //   }
  
// //   .home-text h1 {
// //     font-size: 60px;
// //     font-weight: 900;
// //   }
  
// //   .home-text h2 {
// //     margin-bottom: 50px;
// //   }
  
// //   #home-link {
// //     color: whitesmoke;
// //     text-decoration: none;
// //     padding: 10px 20px;
// //     border: 2px solid aquamarine;
// //     border-radius: 10px;
// //   }
  
// //   #home-link:hover {
// //     color: black;
// //     background-color: aqua;
//   }