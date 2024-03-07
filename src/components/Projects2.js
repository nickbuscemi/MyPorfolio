import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '../data/projectsData';

export const Projects2 = () => {

    const [clicked, setClicked] = useState(Array(6).fill(false)); // Assuming 6 projects

    const handleCardClick = (index) => {
        const newClicked = [...clicked];
        newClicked[index] = !newClicked[index];
        setClicked(newClicked);
    };

    return (
        <section className="project" id="projects">
            <Container>
                <h3>Recent Projects</h3>
                    <Row xs={1} md={2} className="g-4">
                    {projects.slice(0,4).map((project, idx) => (
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
                    <Link to='./projects-all' className='view-more-link'>
                      <button><span>View All...</span></button> 
                    </Link>
            </Container>
        </section>
    );
}


