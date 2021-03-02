import React, { Component } from "react";

export default class Alert extends Component {
  render() {
    return (
      <div className="alert alert-warning" role="alert">
        <div className="container">{this.props.msg}</div>
      </div>
    );
  }
}
