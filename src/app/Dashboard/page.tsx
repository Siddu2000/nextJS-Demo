"use client"
import React,{useState}from 'react'

const Page = () => {
    const data=useState<number>(420);
    console.log(data,"data");
    
  return (
    <div>
        {/* <h1>{data}</h1> */}
        <h1>Dashboard-page</h1>
    </div>
  )
}

export default Page