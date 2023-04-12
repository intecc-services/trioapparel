import React from 'react'
import ProductButton from './ProductButton'
import ProductDetails from './ProductDetails'
import ProductHeading from './ProductHeading'
import ProductImage from './ProductImage'

const Product = () =>{
    return(
        <div class='product-intro'>
        <div class="product-details-wrapper">
            <ProductHeading/>
            <ProductImage />
            <ProductDetails/>
            <ProductButton/>
        </div>
        </div>

    )
}

export default Product