
import React from 'react'

const page = ({params}:{params:{productId:String,reviewId:String}}) => {
  return (
    <div>
        <h1>Product {params.productId} review Is {params.reviewId}</h1>
    </div>
  )
}

export default page