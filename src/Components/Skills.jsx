import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Skills.css';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";

export default class Skills extends React.Component{
    
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
        var height = this.state.height / 1.85;
        return(

            <VisibilitySensor
                partialVisibility
                offset={{top: height, bottom: height}}
            >
                {({ isVisible }) => (
                    <Spring config={{duration: 700, delay: 200}} from={{}}
                    to={{backgroundColor: isVisible ? "#3bab87" : "grey"}}>
                    {props =>
                
                        <div id="section2" ref={(divElement) => {this.divElement = divElement}} >
                            <Container>
                                <Row >
                                    <Col xs={12}>
                                        <div className="title">Skills</div>
                                    </Col>
                                </Row>
                                <div className="skillContainer" style={props}>
                                    <Row className="skillContainer" >
                                        
                                            <Col xs={12}>
                                                <div className="white header">
                                                    Things I Excel At
                                                </div>
                                                
                                            </Col>
                                    </Row>
                                    <Row className="skillContainer skillFooter">
                                        <Col  sm={12} md={4}>
                                            <Spring config={{duration: 700, delay: isVisible? 600:100}} from={{opacity: 0}}
                                            to={{opacity: isVisible? 1:0}}>
                                            {props =>
                                                <div className="langs" style={props}>I work with:</div>
                                            }
                                            </Spring>
                                            <Spring config={{duration: 700, delay: isVisible? 800:100}} from={{opacity: 0}}
                                            to={{opacity: isVisible? 1:0}}>
                                            {props =>
                                                <ul className="twoColumn" style={props}>
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
                                            }
                                            </Spring>
                                        </Col>
                                        
                                        <Spring config={{duration: 700, delay: isVisible? 600:100}} from={{opacity: 0}}
                                        to={{opacity: isVisible? 1: 0}}>
                                        {props =>
                                            <div className="d-none d-md-block dashed" style={props}></div>
                                        }
                                        </Spring>
                                        <Col className="quoteCtn" s={12} md={7}>
                                            <div className="quoteSubCtn">
                                            <Spring config={{duration: 700, delay: isVisible? 1300: 100}} from={{opacity: 0}}
                                            to={{opacity: isVisible? 1: 0}}>
                                            {props =>
                                                <div className="d-none d-md-block quoteTop" style={props}>“</div>
                                            }
                                            </Spring>
                                            <Spring config={{duration: 700, delay: isVisible? 800: 100}} from={{opacity: 0}}
                                            to={{opacity: isVisible? 1:0}}>
                                            {props =>
                                                <div className="white langs quoteText" style={props}>Over the last six years, I have developed skills in a wide range of languages. My goal is to broaden my skillset and knowledge every day. </div>
                                            }
                                            </Spring>
                                            <Spring config={{duration: 700, delay: isVisible? 1300: 100}} from={{opacity: 0}}
                                            to={{opacity: isVisible? 1: 0}}>
                                            {props =>
                                                <div className="d-none d-md-block quoteBottom quoteBottomCtn" style={props}>”</div>
                                            }
                                            </Spring>
                                                </div>
                                        </Col>
                                    </Row>
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

