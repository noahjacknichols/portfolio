import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Skills.css';

function Skills(){

    return(
        <div id="section2">
            <Container>
                <Row >
                    <Col xs={12}>
                        <div className="title">Skills</div>
                    </Col>
                </Row>
                <div className="skillContainer">
                    <Row className="skillContainer">
                        
                            <Col xs={12}>
                                <div className="white header">
                                    Things I Excel At
                                </div>
                                
                            </Col>
                    </Row>
                    <Row className="skillContainer skillFooter">
                        <Col  sm={12} md={4}>
                            <div className="langs">I work with:</div>
                            <ul className="twoColumn">
                                <li className="bulletRow">React</li>
                                <li className="bulletRow">Node.JS</li>
                                <li className="bulletRow">Java</li>
                                <li className="bulletRow">Python</li>
                                <li className="bulletRow">HTML/CSS</li>
                                <li className="bulletRow">JavaScript</li>
                                <li className="bulletRow">C/C++</li>
                                <li className="bulletRow">PostgreSQL</li>
                                <li className="bulletRow">MySQL</li>
                                <li className="bulletRow">Bootstrap</li>
                                <li className="bulletRow">Docker</li>
                                <li className="bulletRow">Git</li>
                            </ul>
                        </Col>
                        
                        <div className= "d-none d-md-block dashed"></div>
                        
                        <Col className="quoteCtn" s={12} md={7}>
                            <div className="quoteSubCtn">
                            <div className="d-none d-md-block quoteTop">“</div>
                        
                            <div className="white langs quoteText">Over the last six years, I have developed skills in a wide range of languages. My goal is to broaden my skillset and knowledge every day. </div>
                            <div className="d-none d-md-block quoteBottom quoteBottomCtn">”</div>
                            </div>
                        </Col>
                    </Row>
                </div>
                
            </Container>    
        </div>
    );

}


export default Skills;