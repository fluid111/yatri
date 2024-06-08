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
      <div className="object-fit-cover">
          {/* image or video */}
          <video ref={videoRef} src='/videos/yatri_video.webm' muted loop autoplay className="w-full h-full object-cover"></video>
        </div> 
        <div className="text text-white absolute top-0 left-0 pl-[140px] pt-[130px] text-5xl">
            <div className='pb-[18px] font-bold font-bebas'>Reinventing</div>
            <div className='pt-[5px] space-x-[13px] font-semibold flex font-bebas'>Urban <div className="pl-[25px] text-blue-300">Mobility</div></div>
      </div>
    </div>
  )
}

export default Main