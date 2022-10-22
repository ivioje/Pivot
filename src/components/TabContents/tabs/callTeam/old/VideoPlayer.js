import React, { useContext } from 'react';
import { Context } from '../../../../../Context';
import './styles.css';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(Context)
  return (
    <div className='video_container'>
      {/*your video*/}
      {
        stream && (
          <div className='video_content'>
            <div className=''>
              <p>{name || 'my Name'}</p>
              <video playsInline muted ref={myVideo} autoPlay={true} className='video-play' />
            </div>
          </div>
        )}

      {/*user's video*/}
      {
        callAccepted && !callEnded && (
          <div className='video_content'>
            <div className=''>
              <p>{call.name || 'Name'}</p>
              <video playsInline ref={userVideo} autoPlay className='video-play' />
            </div>
          </div>
        )}
    </div>
  )
}

export default VideoPlayer