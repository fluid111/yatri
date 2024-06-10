import { useEffect, useRef } from "react";
import React from 'react';

function Main({toggle, setToggle}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className=''>
      <div className="object-fit-cover">
        {/* image or video */}
        <video ref={videoRef}
               src='/videos/yatri_video.webm'
               muted
               loop
               autoPlay
               className="w-full h-full object-cover"></video>
      </div> 
      <div className={`text absolute object-cover transition-opacity delay-300 duration-300 text-white top-0 left-0 md:pl-[140px] md:pt-[130px] pl-[45px] pt-[70px] text-2xl md:text-5xl
                       ${toggle ? 'hidden md:hidden' : ''}`
                       }>
        <div className='md:pb-[18px] pb-[3px] font-bold font-heebo'>Reinventing</div>
        <div className='md:pt-[5px] pt-[2px] md:space-x-[13px] space-x-[4px] object-fit-cover font-semibold flex font-heebo'>Urban
            <div className="md:pl-[25px] pl-[10px] text-blue-300">Mobility
            </div>
          </div>
      </div>
    </div>
  );
}

export default Main;