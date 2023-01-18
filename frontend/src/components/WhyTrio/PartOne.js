import React from 'react'
import { whyTrioImages } from '../../general'
import  {HiBadgeCheck} from 'react-icons/hi'

const PartOne = () => {
  return (
    <div className='part-one'>
      {
        whyTrioImages.map((item)=>{
          return <div className='part-one-item'>
              <div className='part-one-item-image'>
                <img className='img-tag-why-item' src={item.image} alt='not found'/>
              </div>
              <div className='part-one-item-text'>
                <div>{item.text}</div>
                <div><HiBadgeCheck color={'00D856'}/></div>
              </div>
            </div>
        })
      }
    </div>
  )
}

export default PartOne