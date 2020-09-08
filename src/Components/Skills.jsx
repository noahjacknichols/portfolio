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
                <Row>
                    <Col md={{span: 7, offset: 1}} lg={{span: 9, offset: 2}}>
                        <ul>
                            <li className="bullet">
                                TEST
                            </li>
                            <li className="bullet">
                                TEST
                            </li>
                            <li className="bullet">
                                TEST
                            </li>
                            <li className="bullet">
                                TEST
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>    
        </div>
    );

}


export default Skills;