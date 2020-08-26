import React from 'react';
var GithubCommits = require("github-commits");



export default class Portfolio extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isfinishedLoading: false,
            items: [],
            x: 0
        };
    }

    
    getCommits() {
        var gitCommits = new GithubCommits();
        var x = 1;
        return gitCommits.forUser("noahjacknichols")
        .currentWeekCommits()
        .sumCommits(function(sum){
            console.log(sum);
            x = sum;
            
        });
        
    }

    // componentDidMount() {
    //     fetch("https://api.example.com/items")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           this.setState({
    //             isLoaded: true,
    //             items: result.items
    //           });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    // }

    render(){
        const {error, isfinishedLoading, items} = this.state;
        this.getCommits();
        if(error){
            return <div>these are not the droids you are looking for...</div>
        }else {
            return(
                <div id="container">
                    <div id="name">Hey, I'm Noah</div>
                    <div id="github">This month i've made {this.getCommits()} pr's</div>
                    <div id="blog">Written 4 blog posts</div>
                    <div id="coffee">and had 27 cups of coffee</div>
                </div>
            );
        }
    }

}
