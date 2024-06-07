import React from 'react'

function Navbar() {
  return (
    <div className='nav flex justify-center w-full bg-pink-800'>
        <div className='logo bg-black size-20'>
        <img src="/images/yatri_logo.png" alt="logo" />
        </div>
        <div className='links text-blue-300 space-x-5 pl-5 bg-black'>
            {/* only this much is shown initially */}
            {/* other navbar options will be shown after clicking on hamburger menu */}
            {["MODELS", "ENERGY" , "TEST RIDE"].map((item, index)=>{
               return <a key={index} className='nav_link'>{item}</a>
            })}
        </div>

            <div className='hamburger_menu bg-blue-500'>
            {/* use hamburger menu */}
              <span>
                <div>fh</div>
                <div>dghd</div>
                <div>dhdf</div>
              </span>
            </div>
    </div>
  )
}

export default Navbar