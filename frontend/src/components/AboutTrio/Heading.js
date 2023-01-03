import React from 'react'
import './styles.css'
const Heading = () => {
  return (
    <div className='heading-about'>
        <div className='head-image-about'>
            <img src="/images/bg4.png" alt='not found' className='about-img'/>
        </div>
        <div className='overlay-about'></div>
        <div className='head-content-about'>
            About Trio
        </div>
    </div>
  )
}

export default Heading