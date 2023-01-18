import React from 'react'
import { whyTrio } from '../../general'
// import {RiLuggageCartFill} from 'react-icons/ri'

const PartTwo = () => {
  return (
    <div className='part-two'>
        {
            whyTrio.map((item)=>{
                return <div className='whytrio-item'>
                    <div className='why-item-icon'><item.icon size={'2rem'}/></div>
                    <div className='why-item-text'>{item.text}</div>
                </div>
            })
        }
    </div>
  )
}

export default PartTwo