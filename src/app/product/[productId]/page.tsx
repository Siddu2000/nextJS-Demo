import React from 'react'

const page = ({ params }: { params: { productId: string } }) => {
    console.log(params.productId,"o");
    
  return (
    <div>productDeails {params?.productId}</div>
  )
}

export default page