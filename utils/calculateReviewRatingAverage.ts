import { Review } from '@prisma/client'


function calculateReviewRatingAverage(review:Review[]) {
    if(!review.length) return 0;
  return review.reduce((sum, review) => {
return sum + review.rating
  },0)/review.length
}

export default calculateReviewRatingAverage