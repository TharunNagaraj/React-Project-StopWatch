import React, { useState, useRef } from 'react';
import './style.css'
function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function start() {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1);
  }

  function stop() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  function reset() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  }

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const Milliseconds = Math.floor(time % 1000);


    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${Milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
        <center>
      <h1 className='title'>Stopwatch</h1>
      <div className='stopwatch-container'>
      <p className='stopwatch-display'>{formatTime(time)}</p>
      </div>
      {!isRunning ? (
        <button className='stopwatch-button' onClick={start}>Start</button>
      ) : (
        <button className='stopwatch-button' onClick={stop}>Stop</button>
      )}
      <button className='stopwatch-button' onClick={reset}>Reset</button>
      </center>
    </div>
  );
}

export default Stopwatch;

