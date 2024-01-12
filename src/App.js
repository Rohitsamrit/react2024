import "./App.css";
import videos from "./data/data";

import Video from "./components/video";
import PlayButton from "./components/PlayButton";
// import { clear } from "@testing-library/user-event/dist/clear";
function App() {
  return (
    <>
      <div className="App">
        {videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            gi
            verified={video.verified}
            id={video.id}
          >
            <PlayButton  message="Play Video" onPlay={()=>console.log("Playing...",video.title)} onPause={()=>console.log("Paused...",video.title)}>{video.title}</PlayButton>
          </Video>
        ))}
      </div>
    </>
  );
}
export default App;
