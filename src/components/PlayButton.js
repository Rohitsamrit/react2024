import React from "react";
import "./PlayButton.css";

function PlayButton({ children, onPlay, onPause }) {
  let playing = false;

  function eventhandle(e) {
    e.stopPropagation();
   
    if (playing) {
      onPlay();
    } else {
      onPause();
    }
    playing = !playing; // Toggle the value of 'playing'
  }

  return (
    <>
      <button onClick={eventhandle}>{children}</button>
    </>
  );
}

export default PlayButton;
