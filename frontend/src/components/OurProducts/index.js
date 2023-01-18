import React from 'react'
import './styles.css'
import ProductsHeading from './ProductsHeading'
import MyCarousel from './MyCarousel'

const OurProducts = () => {
  return (
    <div className='our-products'>
        <ProductsHeading/>
        <MyCarousel/>
    </div>
  )
}

export default OurProducts