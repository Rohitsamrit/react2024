import "./video.css";
function Video({title,channel="Rajat",views,time}) {
  
  return (
    <>

    <div className="container">
      <div className="pic">
      <img src="https://loremflickr.com/640/360" alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
      {views} views <span>.</span> {time}
       </div>
       </div>
    </>

  );
}

export default Video;
