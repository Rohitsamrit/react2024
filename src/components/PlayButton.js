import React, { useState } from "react";
import "./PlayButton.css";

function PlayButton({ children, onPlay, onPause }) {
  const [playing,setplaying] = useState(false);

  function eventhandle(e) {
        
   
    if (playing) {
      onPlay();
    } else {
      onPause();
    }
    setplaying(!playing);  // Toggle the value of 'playing'
  }

  return (
    <>
      <button onClick={eventhandle}>{children} : {playing ? "▶️" : "⏸️"}</button>
    </>
  );
}

export default PlayButton;
