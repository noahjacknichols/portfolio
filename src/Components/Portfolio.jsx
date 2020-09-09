

import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Portfolio.css';

export default class Portfolio extends React.Component{

    render(){
        return(
            

            <div>
            <Container>
                <Row>
                    <Col xs={{span: 4, offset: 8}}>
                        <div className="portfolioTitle">Work</div>
                    </Col>
                </Row>
                <div className="portfolioContainer">
                    <Row>
                        
                            <Col xs={{span: 4, offset: 8}}>
                                <div className="white header">
                                    oops..
                                </div>
                                
                            </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
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
                            </ul>
                        </Col>
                        <Col xs={1}>
                            <div class="portfolioDashed"></div>
                        </Col>
                        <Col xs={6}>
                            <div className="quote langs">henlo, is it me u r looking for??</div>
                        </Col>
                    </Row>
                </div>
                
            </Container>    
        </div>
            
        );
    }

}
