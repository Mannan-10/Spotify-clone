
import React from 'react'
import Sidebaar from './components/Sidebaar'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="h-screen bg-black">
      <h1 className="h-[90%] flex">
        {/* <Sidebaar /> */}
        <Navbar />
      </h1>
    </div>
  )
}

export default App
