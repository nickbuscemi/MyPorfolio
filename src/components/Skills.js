
import { Row, Col, Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import htmlIcon from '../assets/img/techIcons/htmlIcon.svg'
import javaScriptIcon from '../assets/img/techIcons/icons8-javascript.svg'
import cssIcon from '../assets/img/techIcons/icons8-css.svg'
import reactIcon from '../assets/img/techIcons/icons8-react-native.svg'
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

    const technologies = [
        { imgSrc: htmlIcon, name: "HTML" },
        { imgSrc: javaScriptIcon, name: "JavaScript" },
        { imgSrc: cssIcon, name: "CSS" },
        { imgSrc: reactIcon, name: "React" },
        // Add more technologies here...
    ];

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
                            {/*<h3>Technologies Used</h3>
                            <Row className="mt-4">
                            {technologies.map((tech, index) => (
                                <Col xs={12} sm={6} md={4} lg={3} className="tech-item" key={index}>
                                    <div className="tech-icon">
                                        <img src={tech.imgSrc} alt={tech.name} />
                                    </div>
                                    <h5 className="mt-2">{tech.name}</h5>
                                </Col>
                            ))}
                            </Row>*/}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}