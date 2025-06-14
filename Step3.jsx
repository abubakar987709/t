import React, { use, useEffect, useState } from 'react'

const Step3 = () => {


const[a,b] =useState(0)
useEffect(
    ()=>{
        setTimeout(
            ()=>{
                b(
                    (c)=>(c)+1
                )
            },1000
        )
    }
)

  return (
    <>
    <h1>{a}</h1>
    </>
  )
}

export default Step3