
import React from 'react';
import { Row, Col, Form, Button} from 'react-bootstrap';
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
            
                <Row>
                    <Col xs={12}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange= {this.handleChange} placeholder="name@example.com"/>
                            </Form.Group>
                            <Form.Group></Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows="3" name="content" onChange={this.handleChange}/>
                            </Form.Group>
                        </Form>
                        
                    </Col>
                    <Col xs={12}>
                        <Button variant="primary" onClick={() => this.onButtonPress()} type="submit">
                            Send
                        </Button>
                    </Col>
                </Row>
        );
        
    }
}