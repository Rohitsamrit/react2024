import React, { useContext, useState } from "react";
import "./PlayButton.css";
import theme from "../context/ThemeContext";


function PlayButton({ children, onPlay, onPause }) {
  const theme1=useContext(theme)
  const [playing,setplaying] = useState(false);

  function eventhandle(e) {
    e.stopPropagation();
        
   
    if (playing) {
      onPlay();
    } else {
      onPause();
    }
    setplaying(!playing);  // Toggle the value of 'playing'
  }

  return (
    <>
      <button className={theme1} onClick={eventhandle}>{children} : {playing ? "▶️" : "⏸️"}</button>
    </>
  );
}

export default PlayButton;
