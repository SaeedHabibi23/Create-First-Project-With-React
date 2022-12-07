import React from "react";
import  ReactDOM  from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/product';
import App from './app';

const element = <h1 style={{color: 'red'}}> Hello World </h1>

ReactDOM.render(<Product /> , document.getElementById('root'));