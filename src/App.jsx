import Cart from "./pages/Cart";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import React from "react";
import 'dotenv/config';
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Orders from "./pages/Orders";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  const user = useSelector(state => state.user.currentUser);
  // const user = false;
  return (<Router> 
    <ScrollToTop/>
  <Switch>
  <Route exact path="/">
<Home/>
  </Route>
  <Route path="/products/:category">
    <ProductList />
  </Route>
  <Route path="/products">
    <ProductList />
  </Route>
  <Route path="/product/:id">
    <Product />
  </Route>
  <Route path="/cart">
    <Cart />
  </Route>
  <Route path="/success">
    <Success />
  </Route>
  <Route path="/orders">
    <Orders />
  </Route>
  <Route path="/login">
    {user ? <Redirect to='/'/>: <Login />}
  </Route>
  <Route path="/register">
  {user ? <Redirect to='/'/>: <Register />}
  </Route>
</Switch>
</Router>
  )
};

export default App;