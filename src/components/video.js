import "./video.css";
function Video({
  title,
  id,
  channel = "Rajat",
  views,
  time,
  verified,
  children,
}) {
  // let channeljsx;
  // if(verified){
  //     channeljsx= <div className="channel">{channel}✅</div>
  // }else{
  //     <div className="channel">{channel}</div>
  // }

  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}
        </div>

        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        {children}
      </div>
    </>
  );
}

export default Video;
