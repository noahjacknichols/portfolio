import React from 'react';
import './Intro.css';
import githubCommits from 'github-commits/lib/github-commits';
import { get } from 'react-scroll/modules/mixins/scroller';
import {Container, Row, Col} from 'react-bootstrap';




export default class Portfolio extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isfinishedLoading: false,
            commits: "quite a few",
            coffee: "10"
        };
    }


    


    componentDidMount() {

    }

    componentDidUpdate(){
        
    }


    render(){

        
        
        return(
            <Container fluid>
                <Row>
                    <Col xs={12} md={4}><div>Hi, I'm Noah</div></Col>
                    <Col xs={12} md={4}><div className="mt-5">this week I've made {this.state.commits} commits</div></Col>
                    <Col xs={12} md={4}><div>and I've brewed {this.state.coffee} coffees this week</div></Col>
                </Row>
                
                
            </Container>
        );
        
    }

}
