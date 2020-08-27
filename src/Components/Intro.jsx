import React from 'react';
import githubCommits from 'github-commits/lib/github-commits';
import { get } from 'react-scroll/modules/mixins/scroller';
var GithubCommits = require("github-commits");
var ghCommits = new GithubCommits();

var x = -1;




async function getData(){
    let temp ="uhoh";
    try{
        
        return await ghCommits.forUser("noahjacknichols").currentWeekCommits()
        

        return temp;
        //return correctly
        
    } catch(error){ 
        console.log(error);
    }

    return "stinky";
    

}


async function waitForProcess(){
    let test = await getData();
    console.log("test is:"+JSON.stringify(test))
    console.log(test.requests)
    
    
}



export default class Portfolio extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isfinishedLoading: false,
            items: [],
            commits: -1
        };
    }


    


    componentDidMount() {
        let x = waitForProcess();
        
        
        
            
    
    }

    componentDidUpdate(){
        this.forceUpdate();
    }


    render(){

        const {error, isfinishedLoading, items, commits} = this.state;
        console.log("state is:" + this.state.isfinishedLoading)
        
        if(commits === -1){
            return <div>these are not the droids you are looking for...</div>
        }else {
            return(
                <div id="container">
                    
                    <div id="github">{commits} commits</div>
                    
                    
                </div>
            );
        }
    }

}
