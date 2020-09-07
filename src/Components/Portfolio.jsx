import React from 'react';
import './Portfolio.css';

import {Row, Carousel, Col} from 'react-bootstrap';



export default class Portfolio extends React.Component{



    render(){
        return(
            

                <Row className="portfolioContainer">
                    <Col id="section1" xs={{ span:6, offset: 3}}>
                        
                            {/* <div id="section1">Portfolio:</div> */}
                        
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/300x300"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/300x300"
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/300x300"
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            
                    </Col>
                </Row>
            
        );
    }

}
