import React from 'react';
import './Navbar.css'
import { Link } from "react-scroll";
import { Row, Col} from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';


class Navbar extends React.Component {

    

    render(){
        return(
                <Spring config={{duration: 1500}} from={{opacity: 0, x: 0}}
                to={{opacity: 1, x: 100}}>
                {props =>
                    <Row style={props}>
                        
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
                                                to="section4"
                                                spy={true}
                                                smooth={true}
                                                offset={0}
                                                duration={500}
                                                >
                                                CONTACT
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link 
                                                activeClass="active"
                                                to="section3"
                                                spy={true}
                                                smooth={true}
                                                offset={0}
                                                duration={500}
                                                >
                                                PORTFOLIO
                                            </Link>
                                        </li>

                                        <li className="nav-item extraleft">
                                            <Link 
                                                activeClass="active"
                                                to="section2"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                                >
                                                SKILLS
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </Col>
                    </Row>}
                </Spring>
            
            
            
        );
    }
}

export default Navbar;
