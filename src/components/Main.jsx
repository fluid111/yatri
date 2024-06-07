import React from 'react'

function Main() {
  return (
    <div className='w-full h-screen' class="bg-gradient-to-bl from-black to-100% via-violet-900 to-90%  to-purple-950 to-90%">
      <div class="size-fit">
{/* image or video */}
<video src='\videos\yatri_video.mp4'></video>
        </div>
        <div className="text" class="text-blue-300">
            Reinventing Urban Mobility
        </div>
    </div>
  )
}

export default Main