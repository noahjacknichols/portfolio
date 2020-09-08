import React from 'react';
import './Intro.css';
import { get } from 'react-scroll/modules/mixins/scroller';
import { Row, Col} from 'react-bootstrap';




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
            
                <Row>
                    
                    <Col className="overlap" sm={12} md={6}>
                        <div className="intro">
                            <div className="upper">
                                <div className="upper inline">Hello, I'm </div>
                                <div className="inline nameColored">Noah Nichols</div>
                                <div className="upper inline">.</div>
                            </div>

                            <div className="inline">
                                <div className="inline"> I'm an avid Software Developer based in </div>
                                <div className="inline colored">Waterloo, </div>
                                <div className="inline colored">Ontario</div>
                                <div className="inline">.</div>
                            </div>
                            
                            <div className="inline">
                                <div className="inline"> This week I've made </div>
                                <div className="inline colored">{this.state.commits}</div>
                                <div className="inline"> commits, </div>
                            </div>
                            
                            <div className="inline">
                                <div className="inline">and I've brewed </div>
                                <div className="inline colored">{this.state.coffee}</div>
                                <div className="lower inline"> coffees this week.</div>
                            </div>

                            <div className="inline">
                                <div className="inline"> I am passionate about building excellent software that improves
                                the lives of those around me.</div>
                            </div>
                        </div>
                    </Col>
                    <Col  className="imgContainer d-none d-md-block " md={6}>
                        <div className="headshotImg">
                            <img id="headshotImg" src="https://turbo.paulstamatiou.com/p/sets/africa-2018/south-serengeti/copyright-paulstamatiou_com-DSC2888-1000.jpg"></img>
                        </div>
                    </Col>
                </Row>
                
                
            
        );
        
    }

}

