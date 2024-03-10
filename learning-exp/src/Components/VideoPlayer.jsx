import React from 'react'
import video from '../assets/image/samplevideo.mp4'

const VideoPlayer = () => {
  return (
    <div style={{borderRadius:"20px"}}>
      <video controls width="100%" height="100%">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoPlayer