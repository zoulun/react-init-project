import React, { Component } from "react";
import "./home.less";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="title">
          <h1>Welcome</h1>
          <p>React-init-project</p>
        </div>
      </div>
    )
  }
}