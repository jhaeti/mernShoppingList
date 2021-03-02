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
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          {this.props.auth.isAuthenticated ? (
            <h4 className="text-success">
              Welcome {this.props.auth.user.name}
            </h4>
          ) : (
            <h4 className="text-warning">Login to Add and Remove items</h4>
          )}

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
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logOut })(Logout);
