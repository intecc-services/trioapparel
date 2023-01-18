import React from 'react'
import './styles.css'
import PartOne from './PartOne'
import PartTwo from './PartTwo'

const WhyTrio = () => {
  return (
    <div className='whyTrio'>
        <div className='why-heading'>Why Trio ?</div>
        <div className='why-subhead'>A good work culture is never given, it is built over a time</div>
        <div className='part-one-why'><PartOne/></div>
        <div className='part-two-why'><PartTwo/></div>
    </div>
  )
}

export default WhyTrio