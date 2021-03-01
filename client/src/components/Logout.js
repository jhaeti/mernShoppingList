import React, { Component } from "react";
import { logOut } from "../actions/userActions";
import { connect } from "react-redux";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.logout = () => {
      this.props.logOut();
    };
  }

  render() {
    return (
      <div className="container">
        {this.props.isAuthenticated && (
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={this.logout}
          >
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

export default connect(mapStateToProps, { logOut })(Logout);
