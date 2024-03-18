"use client";
// import { useRouter } from 'next/router'
// import React from 'react'
import { useRouter } from 'next/navigation'


const Orderpage = () => {
    const router=useRouter();
    const handleOnclick=()=>{
        console.log("clicked");
    router.push("/");
    }

  return (
    <div>
        <h1>order Product</h1>
        <button onClick={handleOnclick} className='px-4 py-2 bg-blue-500'>place order</button>
    </div>
  )
}

export default Orderpage