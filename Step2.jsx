import React from 'react'

const Step2 = () => {
const d=new Date("6/14/2025")
console.log(d.getDate())
let b=new Date()
console.log(b.getMilliseconds())
let c=new Date()
console.log(b.getMonth())
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const e = new Date();
let day = days[e.getDay("saturday")];

  return (
    <>
    <h1>Timer App</h1>
    </>
  )
}

export default Step2