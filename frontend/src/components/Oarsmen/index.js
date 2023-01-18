import React from 'react'
import './styles.css'
import { Carousel } from "react-bootstrap";
import { carousel1 } from '../../general';
import MyCarousel from './MyCarousel';
const Oarsmen = () => {
  return (
    <div className='oarsmen'>
        <div className='oarsmen-bg'>
            <img className='oarsmen-bg-tag' src='/images/oarsmen-bg.png' alt='not found'/>
            <div className='overlay-oarsmen'></div>
        </div>

        <div className='oarsmen-carousel'>
            <MyCarousel/>
        </div>
    </div>
  )
}

export default Oarsmen