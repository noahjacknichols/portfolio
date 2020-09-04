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
                    
                    <Col xs={{span: 5, offset: 1}}>
                        <div className="intro">
                            <div className="upper">
                                <div className="upper inline">Hello, I'm </div>
                                <div className="inline colored">Noah Nichols</div>
                                <div className="inline">.</div>
                            </div>

                            <div className="inline">
                                <div className="inline"> I'm an avid Software Developer based in </div>
                                <div className="inline colored">Waterloo, Ontario</div>
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
                                <div className="lower inline"> coffees this week</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                
                
            
        );
        
    }

}