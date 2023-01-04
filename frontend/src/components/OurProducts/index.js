import React from 'react'
import './styles.css'
import ProductsHeading from './ProductsHeading'
import ImgSlider from '../ImgSlider'
import Info from './Info'

const OurProducts = () => {
  return (
    <div className='our-products'>
        <ProductsHeading/>
        {/* <ImgSlider/> */}
        <Info/>
    </div>
  )
}

export default OurProducts