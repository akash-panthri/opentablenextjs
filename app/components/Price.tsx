import { PRICE } from '@prisma/client'
import React from 'react'

function Price({price}:{price:PRICE}) {
    const renderPrice =()=>{
       if (price === PRICE.CHEAP){
        return (
           <span>$$<span className='text-gray-400'>$$</span></span> 
        )
       }else if(price === PRICE.REGULAR){
        return (
            <span>$$$<span className='text-gray-400'>$</span></span> 
         )
       }else{
        return (
            <span>$$$$</span> 
         )
       }
    }
  return (
    <p className="flex mr-3">{renderPrice()}</p>
  )
}

export default Price