import React from 'react'
import './styles.css'
import Heading from './Heading'
import MyCarousel from './MyCarousel'
import Info from './Info'
const AboutTrio = () => {
  return (
    <div>
        <Heading/>
        <MyCarousel/>
        <div className='info-main'>
          <Info/>
        </div>
    </div>
  )
}

export default AboutTrio