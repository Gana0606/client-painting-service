import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './ProjectCards.css';

const ProjectCard = ({ projectInfo }) => {
    const { projectImg, projectName, projectLocation } = projectInfo;
    return (
        <div className="col-md-4 d-flex justify-content-center mb-5">
            <Card border="light" className={"shadow " + styles.contain} style={{ width: '18rem' }}>
                <div className="text-center">
                    <Card.Img className={styles.image} variant="top" src={projectImg} />
                </div>
                <Card.Body>
                    <Card.Title >
                        <Card.Text >
                            <h5>{projectName}</h5>
                            <p>{projectLocation}</p>
                        </Card.Text>
                    </Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectCard;

