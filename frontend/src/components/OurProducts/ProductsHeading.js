import React from 'react'
import './styles.css'

const ProductsHeading = () => {
  return (
    <div className='heading'>
        <div className='head-image'>
            <img src="/images/bg2.png" alt='not found' className='head-img-our-products'/>
        </div>
        <div className='head-image-resp'>
            <img src="/images/bg2Resp.png" alt='not found' className='head-img-our-products'/>
        </div>
        {}
        <div className='overlay'></div>
        <div className='head-content'>
            Our Products
        </div>
        <div className='head-content-sec'>
          <div className='head-content-part'>Formal Shirts</div>
          <div className='head-content-part'>Semi Formal Shirts</div>
          <div className='head-content-part'>Casual Shirts</div>
        </div>
    </div>
  )
}

export default ProductsHeading