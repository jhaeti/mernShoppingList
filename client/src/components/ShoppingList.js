import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem, getItems } from "../actions/itemActions";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.removeItem = (id) => {
      this.props.deleteItem(id);
    };
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items, isLoading } = this.props.item;
    return (
      <div className="container mt-3">
        {isLoading && (
          <div className="text-center">
            <div
              className="spinner-grow mt-3"
              style={{ width: "5rem", height: "5rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        <div className="list-group">
          {items.map((item) => (
            <div
              style={{ overflow: "hidden" }}
              key={item._id}
              className="list-group-item"
            >
              <button
                onClick={this.removeItem.bind(this, item._id)}
                type="button"
                className="btn btn-outline-danger"
                style={{ marginRight: "1rem" }}
              >
                &times;
              </button>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
