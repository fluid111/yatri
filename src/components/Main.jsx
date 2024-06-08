
import { useEffect, useRef } from "react";
import React from 'react';

function Main() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className=' bg-background'>
      <div className="object-fit-cover">
        {/* image or video */}
        <video ref={videoRef} src='/videos/yatri_video.webm' muted loop autoplay className="w-full h-full object-cover"></video>
      </div> 
      <div className="md:text md:absolute md:text-white md:flex-col md:top-0 md:left-0 md:pl-[140px] md:pt-[130px] md:text-5xl">
        <div className='md:pt-[5px] md:space-x-[13px] md:object-fit-cover md:flex md:font-heebo hidden'>
          <div className='md:pb-[18px] md:font-bold md:object-fit-cover md:font-heebo'>Reinventing </div>
        <div className="md:flex md:font-semibold">
          Urban 
          <div className="md:pl-[25px] md:font-semibold md:text-blue-300">Mobility</div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Main;