"use client"
import React from 'react'

const error = ({error,reset}:{error:Error,reset:()=>void}) => {
  return (
    <div><h1>{error.message}</h1>
    <button onClick={reset}>try again</button>
    </div>
  )
}

export default error