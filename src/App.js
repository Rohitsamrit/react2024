import "./App.css";

import Video from "./components/video";
function App() {
  let obj={
    title:"React video",
        channel:"Raj_Kundra",
        views:"10000K",
        time:"45 minutes ago"

  }
  return (
    <div className="App">
      <Video {...obj}></Video>
      <Video
        title="Node video"
        channel="Rohit-tech"
        views="10M"
        time="4 minutes ago"
      ></Video>
    </div>
  );
}
export default App;
