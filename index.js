import React, { Component } from "react";
import ReactDOM from "react-dom";

class MainComponent extends Component {
  render() {
    return <div>This is the main component</div>;
  }
}

ReactDOM.render(
  <MainComponent></MainComponent>,
  document.getElementById("app")
);
