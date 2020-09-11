

import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Portfolio.css';

export default class Portfolio extends React.Component{

    render(){
        return(
            

            <div id="section3">
            <Container className="fixMargin">
                <Row>
                    <Col className='headerPadding' xs={12}>
                        <div className="portfolioTitle" id="section1">Work</div>
                    </Col>
                </Row>
                <div className="portfolioContainer">
                    <Row className="portfolioContainer">
                        
                            <Col xs={12}>
                                <div className="white portfolioHeader">
                                    Stay Hustlin'
                                </div>
                                
                            </Col>
                    </Row>
                    <Row className="portfolioContainer">
                        <Col xs={12}>
                            <div className="portfolioSubHeader">
                                Portfolio Site
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="white portfolioSectionText">
                                I spent a ton of time tinkering and designing this site and am quite proud of how it turned out. Built using React, Node.JS, good ol' CSS, and quite a few scrap sheets of paper.
                            </div>
                        </Col>
                    </Row>
                    <Row className="portfolioContainer">
                        <Col xs={12}>
                            <div className="portfolioSubHeader portSectionUpper">
                                Java Compiler
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="white portfolioSectionText">
                                A Java Compiler written in pure Java that interprets and compiles LLVM Java code utilizing best practices for parsing, interpreting and compiling.
                            </div>
                        </Col>
                    </Row>
                    <Row className="portfolioContainer">
                        <Col xs={12}>
                            <div className="portfolioSubHeader portSectionUpper">
                                GreenThumb
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="white portfolioSectionText  portfolioFooter">
                                An Android app that helps users identify wildlife around them using Node.JS, Java and Machine Learning. 
                            </div>
                        </Col>
                    </Row>
                    {/* <Row className="portfolioContainer">
                        <Col xs={12}>
                            <div className="portfolioSubHeader">
                                Project 4
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="white portfolioSectionText portfolioFooter">
                            Lorem Ipsum Dolor Lorem Ipsum DolorLorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
                            </div>
                        </Col>
                    </Row> */}
                </div>
                
            </Container>    
        </div>
            
        );
    }

}
