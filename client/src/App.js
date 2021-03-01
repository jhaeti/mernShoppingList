import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import { store } from "./store";
import Register from "./components/Register";
import { loadUser } from "./actions/userActions";
import Logout from "./components/Logout";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Register />
          <Logout show={store.getState().auth.isAuthenticated} />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
