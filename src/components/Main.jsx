import React from 'react'

function Main() {
  return (
    <div className='w-full h-screen'>
        <div className="text">
            Reinventing Urban Mobility
        </div>
        <div className="bike">
{/* image or video */}
<video autoPlay muted loop>
<source src="/videos/yatri_video.mp4" type="video/mp4" />
</video>
{/* <video src='/videos/yatri_video'></video> */}
        </div>
    </div>
  )
}

export default Main