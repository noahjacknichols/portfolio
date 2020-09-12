import React from 'react';
import './Intro.css';
import Navbar from './Navbar';
import { Container, Row, Col} from 'react-bootstrap';




export default class Portfolio extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isfinishedLoading: false,
            commits: "22",
            coffee: "10"
        };
    }


    


    componentDidMount() {

    }

    componentDidUpdate(){
        
    }


    render(){

        
        
        return(
            <div> 
                
                <Container >
                    <div className="introBaseContainer">
                    <Navbar/>   
                    <Row >
                        <Col xs={12}>
                            {/* <div className="introTitle">Hello, I'm Noah Nichols</div> */}
                            <div className="introTitle">Hello, I'm</div>
                            <div className="introTitle"> Noah Nichols</div>
                        </Col>
                    </Row>
                    <div className="introContainer">
                        
                        
                        <Row className="introContainer">
                            <Col  sm={12} md={7}>
                            <div className="white introSubText">I am an avid Software Developer based in Waterloo, Ontario.
                                My passion is creating innovative software to enhance and improve the lives of those around me.
                            </div>
                            </Col>
                            
                            
                            
                            <Col className="quoteCtn" s={12} md={4}>
                                
                            
                                
                                
                            </Col>
                        </Row>
                    </div>
                
                    </div>  
                </Container>   
                
            </div>
        );
        
    }

}

