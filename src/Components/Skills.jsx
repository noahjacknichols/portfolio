import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Skills.css';

function Skills(){

    return(
        <div>
            <Container>
                <Row>
                    <Col xs={4}>
                        <div className="title">Skills</div>
                    </Col>
                </Row>
                <div className="skillContainer">
                    <Row>
                        
                            <Col xs={{span: 9}}>
                                <div className="white header">
                                    Things I Excel At
                                </div>
                                
                            </Col>
                    </Row>
                    <Row>
                        <Col  sm={12} md={4}>
                            <div className="langs">I work with:</div>
                            <ul className="twoColumn">
                                <li>React</li>
                                <li>Node.JS</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>C/C++</li>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>Bootstrap</li>
                                <li>Docker</li>
                                <li>Git</li>
                            </ul>
                        </Col>
                        
                        <div className= "d-none d-md-block dashed"></div>
                        
                        <Col s={12} md={1}><div className="quoteTop">“</div></Col> 
                        <Col s={12} md={5}>
                            <div className="white langs quoteText"> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </div>
                        </Col>
                        <Col s={12} md={1}><div className="quoteBottom quoteBottomCtn">”</div></Col>
                    </Row>
                </div>
                
            </Container>    
        </div>
    );

}


export default Skills;