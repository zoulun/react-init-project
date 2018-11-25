import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./app.less";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <div className="title">
          <h1>Welcome</h1>
          <p>React-init-project</p>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)