import React, { Component } from "react";
import { connect } from "react-redux";

class Logout extends Component {
  render() {
    return (
      <div className="container">
        {this.props.isAuthenticated && (
          <button type="button" className="btn btn-outline-dark">
            Logout
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Logout);
