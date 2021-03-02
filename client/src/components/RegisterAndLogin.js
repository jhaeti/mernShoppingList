import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import { connect } from "react-redux";
import Alert from "./Alert";

class RegisterAndLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegister: false,
    };

    this.showRegister = () => {
      this.setState({
        showRegister: !this.state.showRegister,
      });
    };
  }
  render() {
    const { showRegister } = this.state;
    return (
      <div>
        {this.props.auth.showMsg && <Alert msg={this.props.auth.msg.msg} />}
        {showRegister ? (
          <Register showRegister={this.showRegister} />
        ) : (
          <Login showRegister={this.showRegister} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(RegisterAndLogin);
