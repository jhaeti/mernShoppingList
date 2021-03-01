import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/userActions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: null,
    };

    this.onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    this.onSubmit = (e) => {
      e.preventDefault();
      const { email, password } = this.state;
      const user = { email, password };
      console.log(user);

      // Attemp to login a user
      this.props.login(user);
    };
  }

  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props;
    isAuthenticated !== prevProps.isAuthenticated &&
      isAuthenticated &&
      this.setState({
        email: "",
        password: "",
        msg: null,
      });
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div className="container mt-3">
        {!isAuthenticated && (
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                type="email"
                className="form-control"
                placeholder="Email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                onChange={this.onChange}
                value={this.state.password}
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary block">
              Login
            </button>
            <a href="#">Create new account</a>
          </form>
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

export default connect(mapStateToProps, { login })(Login);
