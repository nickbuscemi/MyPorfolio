
import { Row, Col, Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import { skillsObj } from '../data/skillsData';

export const Skills = () => {

    const responsive = {
        superLargeDesktop : {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop : {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet : {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile : {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Gained through a combination of Degree coursework, Coding BootCamp curriculum, and years of self-education</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {skillsObj.map((skill, index) => (
                                    <div className="item" key={index}>
                                    <img src={skill.imgSrc} alt={skill.name} />
                                    <h5>{skill.name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}