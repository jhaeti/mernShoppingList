import React, { Component } from "react";
import { register } from "../actions/userActions";
import { connect } from "react-redux";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
      const { name, email, password } = this.state;
      const newUser = { name, email, password };
      console.log(newUser);
      //   CALL YOUR ACTION BELOW THIS LINE
      this.props.register(newUser);
      this.props.isAuthenticated &&
        this.setState({
          name: "",
          email: "",
          password: "",
          msg: null,
        });
    };
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="container mt-3">
        {!isAuthenticated && (
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                name="name"
                onChange={this.onChange}
                value={this.state.name}
                type="name"
                className="form-control"
                placeholder="Name"
                aria-describedby="emailHelp"
              />
            </div>
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
              Register
            </button>
            <a href="/">Already have an account</a>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default connect(mapStateToProps, { register })(Register);
