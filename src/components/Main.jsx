import { useEffect,useRef } from "react";
import React from 'react'

function Main() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // videoRef.current.play();
      videoRef.current.playbackRate = 0.6;
    }
  }, []);
  return (
    <div className='w-full h-screen bg-background'>
      <div className="text text-buttons">
            Reinventing Urban Mobility
      </div>
      <div className="size-fit">
          {/* image or video */}
          <video ref={videoRef} src='/videos/yatri_video.webm' muted loop></video>
        </div> 
    </div>
  )
}

export default Main