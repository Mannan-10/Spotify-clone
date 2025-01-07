import React, { useContext, useEffect } from 'react'
import Sidebaar from './components/Sidebaar'
import Navbar from './components/Navbar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm'

function App() {

  const { audioRef, track, songData } = useContext(PlayerContext);

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [track, audioRef])

  return (
    <div className="h-screen bg-black">
      {
        songData.length !== 0 ?
          <>
            <Navbar />
            <div className='h-[95%] flex'>
              <Sidebaar />
              <Display />
            </div>
            <Player />
          </>
          : null
      }

      <audio ref={audioRef} src={track?track.audioUrl:""} preload='auto'></audio>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default App;
