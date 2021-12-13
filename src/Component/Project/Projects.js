import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Project from './Project'

const Projects = () => {
   const [Projects, setProject] = useState([]);
   useEffect(()=>{
        fetch('./project.JSON')
        .then(res=> res.json())
        .then (data => setProject(data))
   }, []);
   
    return (
        <div className="container mt-5 pt-5">
            <h2 className="text-primary heading">Personal Project</h2>
            <Row xs={1} md={2} className="g-4 container">
            {
                Projects.map(project=> <Project
                key = {project.id}
                project={project}
                ></Project>)               
            }
</Row>
            
        </div>
    );
};

export default Projects;