
import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import './Contact.css';

export default class Contact extends React.Component{

    state = {
        email: "",
        content: ""
    }

    handleChange = e => {
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value})
        
    }

    onButtonPress(){
        console.log(this.state);


    }


    render(){
        return(
            <div id="section4">
            <Container>
                <Row>
                    <Col xs={{span: 12}}>
                        <div className="contactTitle text-centre">Contact</div>
                    </Col>
                </Row>
                <div className="contactContainer">
                    <Row>
                        
                        <Col xs={12}>
                            <div className="white contactHeader">
                                Say Hello!
                            </div>
                            
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={12}>
                            <div className="white contactEmail">
                                hello@njnichols.dev
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="or">
                                / OR /
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div>
                                {/* <div className="contactDividerL">hello</div> */}
                                <div className="contactText">
                                    check me out on
                                </div>
                                <div className="contactDividerR"/>
                            </div>
                        </Col>
                        <Col className="linkContainer" xs={12}>
                            <div className="inline">
                                <div className="white linkText"><a target="_blank" rel="noopener noreferrer" className="socialLinks" href="https://www.linkedin.com/in/noah-nichols/">LinkedIn</a></div>
                                <div className="white linkText and"> & </div>
                                <div className="white linkText"><a target="_blank" rel="noopener noreferrer" className="socialLinks" href="https://github.com/noahjacknichols?tab=repositories">Github</a></div>
                            </div>
                        </Col>
                        
                    </Row>
                </div>
                
            </Container>    
        </div>

        );
        
    }
}