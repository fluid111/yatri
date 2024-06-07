import React from 'react'

function Navbar() {
  return (
    <div className=''>
        <div className='logo'>
        <img src="/images/yatri_logo.png" alt="logo" />
        </div>
        <div className='links'>
            {/* only this much is shown initially */}
            {/* other navbar options will be shown after clicking on hamburger menu */}
            {["MODELS", "ENERGY" , "TEST RIDE"].map((item, index)=>{
               return <a key={index} className='nav_link'>{item}</a>
            })}
        </div>
        <div className='logo'>
            {/* use hamburger menu */}
            <div className='hamburger_menu color green'>
              <span>
                <div></div>
                <div></div>
                <div></div>
              </span>
            </div>
        {/* <img src="/images/" alt="hamburger menu" /> */}
        </div>
    </div>
  )
}

export default Navbar