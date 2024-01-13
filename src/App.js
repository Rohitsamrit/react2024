import "./App.css";
import videoDb from "./data/data";




import { useState } from "react";
import Addvideo from "./components/Addvideo";
import VideoList from './components/VideoList';

function App() {
  
  const [videos, setvideos] = useState(videoDb);
  const [editablevideo,seteditablevideo]=useState(null)
  function addVideos(video){
    setvideos([...videos, {...video,id:videos.length+1}]);
  }
  function deletevideo(id){
    setvideos(videos.filter(video=>video.id!==id))
   
  }
  function editvideo(id){
    seteditablevideo(videos.find(video=>video.id===id))
  
  }
  function updatevideo(video){
    const index=videos.findIndex(v=>v.id===video.id);
    const newVideos=[...videos]
    newVideos.splice(index,1,video);
    setvideos(newVideos);


  }
  
  return (
    <div className="App" onClick={()=>console.log('App')}>
       <Addvideo addVideos={addVideos} updatevideo={updatevideo} editablevideo={editablevideo}></Addvideo>
       <VideoList deletevideo={deletevideo} editvideo={editvideo} videos={videos}></VideoList>


    </div>
  );

}
export default App;
