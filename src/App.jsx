import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const[toggle, setToggle] = useState(false);

  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Main toggle={toggle} />
    </div>
  )
}

export default App