import React, { Component } from "react";
import { addItem } from "../actions/itemActions";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      itemName: "",
    };

    this.onChange = (e) => {
      this.setState({
        itemName: e.target.value,
      });
    };

    this.onSubmit = (e) => {
      e.preventDefault();
      const name = this.state.itemName;
      this.props.addItem(name);
      this.setState({
        itemName: "",
        isOpen: false,
      });
    };
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              MyList
            </a>
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => {
                this.setState((state) => ({ isOpen: !state.isOpen }));
              }}
            >
              Add Item
            </button>
          </div>
        </nav>
        {this.state.isOpen && (
          <form style={formStyle} onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Type the item name here"
                className="form-control"
                id="name"
                aria-describedby="textHelp"
                value={this.state.itemName}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        )}
      </React.Fragment>
    );
  }
}

const formStyle = {
  width: "100%",
  padding: "2rem 10%",
  background: "#5f5f5f",
};

export default connect(null, { addItem })(Navbar);
