import React from 'react'
import OurProducts from '../components/OurProducts'
import Info from '../components/AboutTrio/Info'
import OurProducts2 from '../components/OurProducts/OurProducts2'
import "./styles.css"

const Page3 = () => {
  return (
    <div>
        <div className="our-products">
        <OurProducts />
      </div>

     

      <div className="our-products-2">
        <OurProducts2/>
      </div>
    </div>
  )
}

export default Page3