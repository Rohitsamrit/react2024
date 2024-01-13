import { useContext } from 'react';
import './video.css';
import theme from '../context/ThemeContext';

function Video({title,id,channel="Coder Dost",views,time,verified,dispatch,children,editvideo}) {
  console.log('render Video')
  const theme1=useContext(theme);

  
  return (
      <>
      <div className={`container ${theme1}`}>
      <button className='close' onClick={()=>dispatch({ type: "Delete", payload: id })}>🗑</button>
      <button className='close1' onClick={()=>editvideo(id)}>⚙️</button>
      <div className="pic">
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>
        {children}
      </div>
      </div>
      </>
  );
}

export default Video;