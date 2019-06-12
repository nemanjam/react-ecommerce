import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Album from "./pages/Album";
import Profile from "./pages/Private/Profile";
import Feature from "./pages/Private/Feature";
import Products from "./pages/Products";
import Product from "./pages/Product";
import LikedProducts from "./pages/LikedProducts";
import Cart from "./pages/Cart";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Album} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/feature" component={Feature} />
            <Route path="/products" component={Products} />
            <Route path="/liked-products" component={LikedProducts} />
            <Route path="/cart" component={Cart} />
            <Route path="/product" component={Product} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
