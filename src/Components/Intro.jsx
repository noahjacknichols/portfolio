import React from 'react';
import './Intro.css';
import Navbar from './Navbar';
import { Container, Row, Col} from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';



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
                <Spring config={{duration: 1500}} from={{opacity: 0, x: 0}}
                to={{opacity: 1, x: 100}}>
                {props =>
                <Container >
                    <div className="introBaseContainer" >
                    <Navbar/>   
                    <Row >
                        <Col xs={12} style={props}>
                            {/* <div className="introTitle">Hello, I'm Noah Nichols</div> */}
                            <div className="introTitle">Hello, I'm</div>
                            <div className="introTitle"> Noah Nichols</div>
                        </Col>
                    </Row>
                    <div className="introContainer" >
                        
                        <Spring config={{duration: 800, delay: 1500}} from={{opacity: 0, marginLeft: -30}} // marginLeft: -150
                                to={{opacity: 1, marginLeft: 10}}>
                        {props =>
                            <Row className="introContainer" style ={props}>
                                <Col  sm={12} md={7}>
                                
                                    <div className="white introSubText" >I am an avid Software Developer based in Waterloo, Ontario.
                                        My passion is creating innovative software to enhance and improve the lives of those around me.
                                    </div>
                                
                                </Col>
                                
                                
                                
                                <Col className="quoteCtn" s={12} md={4}>
                                    
                            
                                
                                
                                </Col>
                            </Row>}
                        </Spring>
                    </div>
                
                    </div>  
                </Container> }   
                </Spring>   
            </div>
            
        );
        
    }

}

