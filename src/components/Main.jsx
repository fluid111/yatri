import React from 'react'

function Main() {
  return (
    <div className='w-full h-screen' class="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-violet-900 via-purple-950  to-black to-90%">
      <div class="size-fit">
{/* image or video */}
<video src='\videos\yatri_video.mp4'></video>
        </div>
        <div className="text" class="text-blue-300">
            Reinventing Urban Mobility
        </div>
        <div className="bike">
{/* image or video */}
<video src="/videos/yatri_video"></video>
        </div>
    </div>
  )
}

export default Main