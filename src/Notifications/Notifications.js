import React, { Component } from "react";
import "./Notifications.css";

export default class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
        top: -100
    };
  }
  
  render() {
    const style = {
        backgroundColor: "pink",
        color: "white",
        padding: "16px",
        position: "absolute",
        top: `${props => props.top}px`,
        right: "16px",
        zIndex: "999",
        transition: "top 0.5s ease"
    }
    return <div style={style}>Example Text Here</div>;
  }
}
