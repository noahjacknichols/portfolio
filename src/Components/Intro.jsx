import React from 'react';
import githubCommits from 'github-commits/lib/github-commits';
import { get } from 'react-scroll/modules/mixins/scroller';





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
            <div id="container">
                <div id="name">Hi, I'm Noah</div>
                
                <div id="github">this week I've made {this.state.commits} commits</div>
                <div id="coffee">and I've brewed {this.state.coffee} coffees this week</div>
                
                
            </div>
        );
        
    }

}
