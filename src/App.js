import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route , Switch} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Defaults from "./pages/Default";
import Navbar from "./components/navbar";
import Cart from "./pages/cart";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:slug" component={SingleProduct} />
      <Route exact path="/cart" component={Cart} />
      <Route component={Defaults} />
    </Switch>
    </>
  );
}

export default App;
