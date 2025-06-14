import { use, useEffect, useState } from 'react'
import "./s.css"
import Step3 from './Step3'
import Fg from './Fg'

const Step1 = () => {
  const[add,setadd]=useState(0)
  const addfunc = () =>{
    setTimeout(() => {
      setadd(add+1)
    });
    
  }
  useEffect(()=>{
    console.log("the time is start")
  },[addfunc])
  

  return (
    <>
    <div className="main">
        <div className="box">
    <button onClick={addfunc} >start</button>
    <h2>{add}</h2>
        <Fg/>
        </div>
    </div>
    
    </>
  )
}

export default Step1