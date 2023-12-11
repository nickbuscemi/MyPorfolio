import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/githubIcon.svg';
import BUSCEMIflat from '../assets/img/BUSCEMIflat.svg';

export const NavBar2 = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={BUSCEMIflat} alt="Logo" width={200} height={100}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/nicholas-buscemi-0023a9248/'><img src={navIcon1} alt='' /></a>
                            <a href='https://github.com/nickbuscemi'><img src={githubIcon} alt='' /></a>
                            <a href='https://www.instagram.com/'><img src={navIcon3} alt='' /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container> 
        </Navbar>
    );
};

