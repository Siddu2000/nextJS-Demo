import React from 'react'

const page = ({params}:{params:{slug:string}}) => {
  return (
    <h1>document page id is {params.slug}</h1>
  )
}

export default page