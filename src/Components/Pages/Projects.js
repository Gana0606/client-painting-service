import React, { useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import ProjectCards from '../ProjectCards/ProjectCards';
import { projectList } from '../Data/Data';
import { scrollTo } from '../Tools/Scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../PagesCss/Projects.css';

const Projects = () => {

    useEffect(() => {
        scrollTo(10, 10);
    }, [])

    return (
        <div>
            <section className="mt-5 projects-container" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 mt-5" > <h3 className="text-center" ><Badge variant="danger" pill >Projects</Badge></h3> </div>
                        <div className="col-12 mb-5" >
                            <h1 className="text-center mt-3" >Take A Look <br /> Our Latest Project</h1>
                        </div>
                        {
                            projectList.map(each => <ProjectCards key={each.projectName} projectInfo={each} ></ProjectCards>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;