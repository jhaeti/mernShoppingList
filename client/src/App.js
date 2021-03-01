import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import { store } from "./store";
<<<<<<< HEAD

class App extends Component {
=======
import Register from "./components/Register";
import { loadUser } from "./actions/userActions";
import Logout from "./components/Logout";
import Login from "./components/Login";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
>>>>>>> register-login
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
<<<<<<< HEAD
=======
          <Register />
          <Logout />
          <Login />
>>>>>>> register-login
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
