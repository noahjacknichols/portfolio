import React from 'react';
import './Navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { Row, Col} from 'react-bootstrap';

class Navbar extends React.Component {

    

    render(){
        return(
            
                <Row>
                    
                    <Col xs={3}>
                        <div className="logo">N/N</div>
                    </Col>
                    <Col xs={{ span: 6, offset: 3}}>
                        
                        <nav className="nav" id="navbar">
                            <div className="nav-content">
                                <ul className="nav-items">
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
            
            
        );
    }
}

export default Navbar;
