import React from 'react';
import './Navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { Container, Row, Col} from 'react-bootstrap';

class Navbar extends React.Component {

    

    render(){
        return(
            <Container className="ctn" fluid>
                <Row>
                    
                    <Col xs={3}>
                        <div className="logo">N/N</div>
                    </Col>
                    <Col className=" d-none d-sm-block" sm={9} m={{ span: 6, offset: 3}}>
                        
                        <nav className="nav" id="navbar">
                            <div className="nav-content">
                                <ul className="nav-items list">
                                    <li className="nav-item ">
                                        <Link 
                                            activeClass="active"
                                            to="section1"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            >
                                            PORTFOLIO
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            activeClass="active"
                                            to="section1"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            >
                                            BLOG
                                        </Link>
                                    </li>

                                    <li className="nav-item extraleft">
                                        <Link 
                                            activeClass="active"
                                            to="section1"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            >
                                            CONTACT
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
            
            
        );
    }
}

export default Navbar;
