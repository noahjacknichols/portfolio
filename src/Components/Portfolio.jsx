

import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Portfolio.css';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";

export default class Portfolio extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            height: 0,
            width: 0

        };
    }

    componentDidMount(){
        const height = this.divElement.clientHeight;
        this.setState({ height})
        console.log(this.state.height)
    }

    render(){
        const height = this.state.height / 2;
        return(
            <VisibilitySensor 
            partialVisibility
            offset={{top: height, bottom: height}}
            >
                {({ isVisible }) => (
                <Spring config={{duration: 700, delay: 200}} from={{}}
                to={{backgroundColor: isVisible ? "#98bec8" : "grey"}}>
                {props =>

                    <div id="section3" className="s3" ref={(divElement) => {this.divElement = divElement}}>
                    <Container className="fixMargin">
                        <Row>
                            <Col className='headerPadding' xs={12}>
                                <div className="portfolioTitle" id="section1">Work</div>
                            </Col>
                        </Row>
                        
                        <div className="portfolioContainer" style={props}>
                            <Row className="portfolioContainer">
                                
                                    <Col xs={12}>
                                        <div className="white portfolioHeader">
                                            Stay Hustlin'
                                        </div>
                                        
                                    </Col>
                            </Row>
                            <Spring config={{duration: 700, delay: 800}} from={{opacity: 0, marginLeft: "2vw"}}
                            to={{opacity: isVisible? 1: 0, marginLeft: "6vw"}}>
                            {props =>
                            <div>
                            <Row className="portfolioContainer">
                                <Col xs={12}>
                                    <div className="portfolioSubHeader" style={props}>
                                        Portfolio Site
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <Spring config={{duration: 700, delay: 1600}} from={{opacity: 0}}
                                    to={{opacity: isVisible? 1: 0}}>
                                    {props =>
                                    <div className="white portfolioSectionText" style={props}>
                                        Hours of creativity and effort have been spent on the development of this site. It was developed using React, Node.JS, CSS and quite a few scrap sheets of paper.
                                    </div>
                                    }
                                    </Spring>
                                </Col>
                            </Row>
                            <Row className="portfolioContainer" >
                                <Col xs={12}>
                                    <div className="portfolioSubHeader portSectionUpper" style={props}>
                                        Java Compiler
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <Spring config={{duration: 700, delay: 1600}} from={{opacity: 0}}
                                    to={{opacity: isVisible? 1: 0}}>
                                    {props =>
                                    <div className="white portfolioSectionText" style={props}>
                                        A Java Compiler written in pure Java that interprets and compiles LLVM Java code utilizing best practices for parsing, interpreting and compiling.
                                    </div>
                                    }
                                    </Spring>
                                </Col>
                            </Row>
                            <Row className="portfolioContainer">
                                <Col xs={12}>
                                    <div className="portfolioSubHeader portSectionUpper" style={props}>
                                        GreenThumb
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <Spring config={{duration: 700, delay: 1600}} from={{opacity: 0}}
                                    to={{opacity: isVisible? 1: 0}}>
                                    {props =>
                                    <div className="white portfolioSectionText  portfolioFooter" style={props}>
                                        An Android app that helps users identify wildlife around them using Node.JS, Java and Machine Learning. 
                                    </div>
                                    }
                                    </Spring>
                                </Col>
                            </Row>
                            </div>
                            }
                            </Spring>

                        </div>
                        
                        
                    </Container>    
                </div>
            }   
            </Spring>

        )}
        </VisibilitySensor>
        );
    }

}
