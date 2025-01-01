import React, { useContext } from 'react'
import Sidebaar from './components/Sidebaar'
import Navbar from './components/Navbar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import { Route, Router, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm'

function App() {

  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <Navbar />
      <div className='h-[95%] flex'>
        <Sidebaar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default App
