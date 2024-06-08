import React from 'react'

function Navbar() {
  return (
    <div className='nav flex w-full bg-pink-800'>
        <div className='logo bg-black justify-start'>
        <img src="/images/yatri_logo.png" alt="logo" />
        </div>
        <div className='links text-blue-300 space-x-5 p-5 bg-black size-full text-right'>
            {/* only this much is shown initially */}
            {/* other navbar options will be shown after clicking on hamburger menu */}
            {["MODELS", "ENERGY" , "TEST RIDE"].map((item, index)=>{
               return <a key={index} className='nav_link'>{item}</a>
            })}
        </div>
            <div className='hamburger_menu bg-blue-500 size-16 text-xs'>
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