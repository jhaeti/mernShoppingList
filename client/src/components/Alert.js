import React, { Component } from "react";

export default class Alert extends Component {
  render() {
    return (
      <div className="alert alert-warning container mt-2" role="alert">
        {this.props.msg}
      </div>
    );
  }
}
