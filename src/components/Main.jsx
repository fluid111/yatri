import { useEffect,useRef } from "react";
import React from 'react'

function Main() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      // videoRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <div className='w-full h-screen bg-background'>
      <div className="text text-white">
            Reinventing Urban Mobility
      </div>
      <div className="object-fit-cover">
          {/* image or video */}
          <video ref={videoRef} src='/videos/yatri_video.webm' muted loop autoplay className="w-full h-full object-cover"></video>
        </div> 
    </div>
  )
}

export default Main