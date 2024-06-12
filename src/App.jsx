import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';
import Model from './components/Model';
import Footer from './components/Footer';

function App() {
  const[toggle, setToggle] = useState(false);

  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Main toggle={toggle} />
      <Model toggle={toggle}/>
      <Footer/>
    </div>
  )
}

export default App