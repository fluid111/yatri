import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar({toggle, setToggle}) {
  // const [toggle, setToggle] = useState(false);
  const handleToggleClick = () =>{
    setToggle(!toggle);
  };

  return (
    <nav className='p-[5px] bg-black'>
      <div className='nav flex w-full bg-black justify-between h-16'>
        <div className='logo bg-black pl-[5px] size-[70px] place-content-center'>
            <img src="/images/yatri_logo.png" alt="logo" className="h-10 hover:cursor-pointer" />
        </div>
        
         {toggle ? (<AiOutlineClose
            onClick = {handleToggleClick}
            className='text-buttons text-2xl h-[70px] md:hidden block'
          />
        ) : (
          <AiOutlineMenu
            onClick= {handleToggleClick}
            className='text-buttons text-2xl h-[70px] md:hidden block'
          />
        )} 

        <div className='header hidden md:flex'>
          <div className='links text-white'>
           <ul className=''>
            <button className='flex text-gray-400 space-x-[50px] font-bold font-heebo text-[17px] pt-[18px] pr-[18px] bg-black size-full text-right text-base'>
            <li className='hover:text-white transition duration-300'>MODELS</li>
            <li className='hover:text-white transition duration-300'>ENERGY</li>
            <li className='hover:text-white transition duration-300'>TEST RIDE</li>
          </button>
           </ul>
          </div>
        </div>
        <ul className={`${toggle ? 'left-[0] absolute' : 'left-[-100%]'} links duration-200 md:hidden w-full h-screen fixed bg-background top-[70px] text-white absolute`}>
          <li className='p-5'>MODELS</li>
          <li className='p-5'>ENERGY</li>
          <li className='p-5'>TEST RIDE</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;