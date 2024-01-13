import "./App.css";
import videoDb from "./data/data";

import { useReducer, useState } from "react";
import Addvideo from "./components/Addvideo";
import VideoList from "./components/VideoList";

function App() {
  const [editablevideo, seteditablevideo] = useState(null);
  function videoReducer(videos, action) {
    
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "Delete":
        return videos.filter(video=>video.id!==action.payload)

      case "Update":
        
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        seteditablevideo(null)

        return newVideos;

      default:
        return videos;
    }
  }

  // const [videos, setvideos] = useState(videoDb);
  const [videos, dispatch] = useReducer(videoReducer, videoDb);
  
  // function addVideos(video) {
  //   dispatch({ type: "ADD", payload: video });
    // setvideos([...videos, {...video,id:videos.length+1}]);
  // }
  // function deletevideo(id) {
  //   dispatch({ type: "Delete", payload: id });
    // setvideos(videos.filter(video=>video.id!==id))
  // }
  function editvideo(id) {
    seteditablevideo(videos.find((video) => video.id === id));
  }
  // function updatevideo(video) {
  //   dispatch({ type: "Update", payload: video });
    // const index = videos.findIndex((v) => v.id === video.id);
    // const newVideos = [...videos];
    // newVideos.splice(index, 1, video);
    // setvideos(newVideos);
  // }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <Addvideo
        // addVideos={addVideos}
        dispatch={dispatch}
        // updatevideo={updatevideo}
        editablevideo={editablevideo}
      ></Addvideo>
      <VideoList
        // deletevideo={deletevideo}
        dispatch={dispatch}
        editvideo={editvideo}
        videos={videos}
      ></VideoList>
    </div>
  );
}
export default App;
