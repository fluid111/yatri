import React from 'react'

function Navbar() {
  return (
    <div className='nav'>
        <div className='logo' class="bg-black">
        <img src="/images/yatri_logo.png" alt="logo" />
        </div>
        <div className='links' class="text-blue-300 space-x-5 pl-5 bg-black">
            {/* only this much is shown initially */}
            {/* other navbar options will be shown after clicking on hamburger menu */}
            {["MODELS", "ENERGY" , "TEST RIDE"].map((item, index)=>{
               return <a key={index} className='nav_link'>{item}</a>
            })}
        </div>
        <div className='logo' class="bg-black">
            {/* use hamburger menu */}
        <img src="/images/" alt="hamburger menu" />
        </div>
    </div>
  )
}

export default Navbar