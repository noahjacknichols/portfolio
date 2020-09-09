
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
            <div>
            <Container>
                <Row>
                    <Col xs={{span: 12}}>
                        <div className="contactTitle text-centre">Contact Me!</div>
                    </Col>
                </Row>
                <div className="contactContainer">
                    <Row>
                        
                            <Col xs={{span: 9, offset: 3}}>
                                <div className="white header">
                                    Things to come...
                                </div>
                                
                            </Col>
                    </Row>
                    <Row>
                        
                        
                    </Row>
                </div>
                
            </Container>    
        </div>

        );
        
    }
}