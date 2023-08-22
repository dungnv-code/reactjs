// import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useRef, useState, useMemo, useReducer, createContext, useImperativeHandle } from "react";
import Video from './video'
function App() {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef.current)
  })


  function hanlePlay() {
    videoRef.current.play();
  }
  function hanlePause() {
    videoRef.current.pause();
  }

  return (<div>
    <Video
      ref={videoRef}
    />
    <button onClick={hanlePause}>Pause</button>
    <button onClick={hanlePlay}>Play</button>
  </div>
  )
}
export default App;