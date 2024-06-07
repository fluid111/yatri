import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App