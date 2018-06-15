import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {

  //leaving state for now just in case i want to add more functionality later.  
  state = {
    image: "./images/botdesign2.jpg",
    match: false,
    matchCount: 0
  };


  render() {
    return (
      <div>
        <h1 className="text-center">Make New Friends</h1>
        <h3 className="text-center">
          Send a message in a bottle or sift through messages from others.  
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          Made friends with {this.state.matchCount} other users so far!
        </h1>
      
      </div>
    );
  }
}

export default Discover;
