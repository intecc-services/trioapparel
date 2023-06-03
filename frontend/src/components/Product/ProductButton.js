import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const ProductButton = ()=>{
    return (
        <div className="product-button-div">
            <h4 className="product-button-heading">
                Check out our products
            </h4>
            <Link to='/product' style={{textDecoration:'none'}}>
            <button className="product-button">Products</button>
            </Link>
        </div>
    )
}

export default ProductButton