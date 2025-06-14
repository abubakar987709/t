import React, { useState, useRef } from 'react';
import "./s.css"

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startCounting = () => {
    if (isRunning) return; // Already running, do nothing
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000); // Increment every second
  };

  const pauseCounting = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetCounting = () => {
    clearInterval(intervalRef.current);
    setCount(0);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
         <img src="t.jpg" alt="" /> 
      <h1>Count: {count}</h1>
      <button className='d' onClick={startCounting} disabled={isRunning}>Start / Resume</button>
      <button className='d1' onClick={pauseCounting} disabled={!isRunning} style={{ marginLeft: '10px' }}>Pause</button>
      <button className='d3' onClick={resetCounting} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
  );
};

export default Counter;
