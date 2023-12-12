import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/githubIcon.svg';
import BUSCEMIflat from '../assets/img/BUSCEMIflat.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={BUSCEMIflat} alt="Logo" width={200} height={100}/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/nicholas-buscemi-0023a9248/'><img src={navIcon1} alt='' /></a>
                            <a href='https://github.com/nickbuscemi'><img src={githubIcon} alt='' /></a>
                            <a href='https://www.instagram.com/'><img src={navIcon3} alt='' /></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}