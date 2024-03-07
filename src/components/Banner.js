import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
//import headerImg from '../assets/img/header-img.svg';
import bannerlogo2 from '../assets/img/bannerlogo2.svg'
import { useEffect, useState } from "react";

export const Banner = () => {

const texts = ["Full Stack Developer", "Software Engineer", "Web Designer" /*"Social Media Managment"*/];
    const [currentText, setCurrentText] = useState(texts[0]);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const changeText = () => {
            setFade(true);
            setTimeout(() => {
                setCurrentText(texts[(texts.indexOf(currentText) + 1) % texts.length]);
                setFade(false);
            }, 500); // This should match the duration of the fade effect
        };

        const intervalId = setInterval(changeText, 3000);

        return () => clearInterval(intervalId);
        // eslint-disable-next-line
    }, [currentText]);

    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} m={6} xl={7} style={{ textAlign: 'left', padding: '40px'}}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hello I'm Nick.`}</h1>
                        <h1 className={`wrap ${fade ? 'fade' : ''}`}>{currentText}</h1>
                        <p>Browse through my recent projects and feel free to reach out to collaborate!</p>
                        <button onClick={() => console.log('connect')}>let's Create<ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} m={6} xl={5}>
                        <img src={bannerlogo2} alt="Header-Img" height={500}/>  
                    </Col>
                </Row>
            </Container>

        </section>
    )
}