import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='p-[5px] bg-black'>
      <div className='nav flex w-full bg-black justify-between h-[65px]'>
        <div className='logo bg-black pl-[5px] size-[70px] place-content-center'>
          <img src="/images/yatri_logo.png" alt="logo" />
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => {
              setToggle(!toggle);
            }}
            className='text-buttons text-2xl h-[70px] md:hidden block'
          />
        ) : (
          <AiOutlineMenu
            onClick={() => {
              setToggle(!toggle);
            }}
            className='text-buttons text-2xl h-[70px] md:hidden block'
          />
        )}
        <div className='header hidden md:flex'>
          <div className='links text-buttons space-x-[45px] pt-[18px] pr-[18px] bg-black size-full text-right text-base'>
            {["MODELS", "ENERGY", "TEST RIDE"].map((item, index) => {
              return <a key={index} className='nav_link'>{item}</a>
            })}
          </div>
        </div>
        <ul className={`${toggle ? 'left-[0] absolute' : 'left-[-100%]'} links duration-500 md:hidden w-full h-screen fixed bg-background top-[70px] text-blue-300 absolute`}>
          <li className='p-5'>
            MODELS
          </li>
          <li className='p-5'>
            ENERGY
          </li>
          <li className='p-5'>
            TEST RIDE
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;