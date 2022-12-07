import React, { Component } from 'react';

class Product extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <span className="m-3 text-info"> Product Name </span>
                <span className="m-3 badge bg-primary"> 2 </span>
                <button className="m-3 btn btn-sm btn-success"> + </button>
                <button className="m-3 btn btn-sm btn-warning"> - </button>
                <button className="m-3 btn btn-danger btn-sm"> Delete </button>
            </div>
        );
    }
}
 
export default Product;