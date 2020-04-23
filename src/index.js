import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Checkout from "./Checkout/Checkout";
import products from "./products";

const checkout = new Checkout(products);

ReactDOM.render(<App checkout={checkout} />, document.getElementById("root"));
