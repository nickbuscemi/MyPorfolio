import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projects } from '../data/projectsData';

export const ProjectsAll = () => {

    const [clicked, setClicked] = useState(Array(6).fill(false)); // Assuming 6 projects

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCardClick = (index) => {
        const newClicked = [...clicked];
        newClicked[index] = !newClicked[index];
        setClicked(newClicked);
    };

    return (
        <section className="project all-project" id="projects">
            <Container>
                <h3>My Projects</h3>
                <p>Below you can check out all of my projects. They are either deployed on the web and or available for download.  </p>
                    <Row xs={1} md={2} className="g-4">
                    {projects.map((project, idx) => (
                        <Col key={idx} onClick={() => handleCardClick(idx)}>
                            <Link to={project.link} style={{ textDecoration: 'none' }}>
                            <Card>
                                    <Card.Img variant="top" src={project.imgUrl} />
                                    <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                    </Row>
            </Container>
        </section>
    )
}