import "./App.css";
import videoDb from "./data/data";

import Video from "./components/video";
import PlayButton from "./components/PlayButton";
// import Counter from "./components/counter";
import { useState } from "react";
import Addvideo from "./components/Addvideo";

function App() {
  
  const [videos, setvideos] = useState(videoDb);
  function addVideos(video){
    setvideos([...videos, {...video,id:videos.length+1}]);
  }
  return (
    <>
      <div className="App">
      <Addvideo addVideos={addVideos}></Addvideo>
        {videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            
            verified={video.verified}
            id={video.id}
          >
            <PlayButton
              message="Play Video"
              onPlay={() => console.log("Playing...", video.title)}
              onPause={() => console.log("Paused...", video.title)}
            >
              {video.title}
            </PlayButton>
            {/* <Counter></Counter> */}
          </Video>
        ))}
      </div>
    </>
  );
}
export default App;
