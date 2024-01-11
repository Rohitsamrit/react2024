import "./App.css";
import videos from "./data/data";

import Video from "./components/video";
function App() {
  
  return (
    <div className="App">
     {
      videos.map(video =>
        <Video
        key={video.id}
        title={video.title}
        channel={video.channel}
        views={video.views}
        time={video.time}
        verified={video.verified}
        id={video.id}
      ></Video>
      )
     }
    </div>
  );
}
export default App;
