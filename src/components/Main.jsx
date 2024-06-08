import React from 'react'

function Main() {
  return (
    <div className='w-full h-screen bg-background'>
      <div className="text text-blue-300">
            Reinventing Urban Mobility
      </div>
      <div className="size-fit">
          {/* image or video */}
          <video src='/videos/yatri_video.webm' autoplay loop ></video>
        </div> 
    </div>
  )
}

export default Main