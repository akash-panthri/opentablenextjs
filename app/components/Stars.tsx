import React from 'react'
import fullStar from '../../public/icons/full-star.png'
import halfStar from '../../public/icons/half-star.png'
import emptyStar from '../../public/icons/empty-star.png'
import Image from "next/image"
import { Review } from '@prisma/client'
import calculateReviewRatingAverage from '../../utils/calculateReviewRatingAverage'

function Stars({reviews}:{reviews:Review[]}) {
    const rating = calculateReviewRatingAverage(reviews)

    const renderFunction =()=>{
        const stars =[];
        for(let i =0; i < 5; i++){
const difference = parseFloat((rating - i).toFixed(1)) 
if(difference >= 0.6) stars.push(fullStar)
else if (difference < 0.6 && difference > 0.2 ) stars.push(halfStar)
else stars.push(emptyStar)
        }

        return stars.map((star,idx)=>{
            return (
                <Image src={star} alt='' key={idx} className='w-4 h-4 mr-1' />
            )
        })
    }
  return (
    <div className='flex items-center' >{renderFunction()}</div>
  )
}

export default Stars