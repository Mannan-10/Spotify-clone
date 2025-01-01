import React, { createContext, useEffect, useRef, useState } from "react";
import { songData } from "../assets/assests";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) => {
        await setTrack(songData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async () => {
        if (track.id>0){
            await setTrack(songData[track.id-1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    } 

    const next = async () => {
        if (track.id < songData.length-1){
            await setTrack(songData[track.id+1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    } 

    const seekSong = async (e) => {
        const percent = e.nativeEvent.offsetX / seekBg.current.offsetWidth;
        seekBar.current.style.width = percent * 100 + '%';
        audioRef.current.currentTime = percent * audioRef.current.duration;
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime) / Math.floor(audioRef.current.duration)) * 100 + '%';
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        },1000)
    },[audioRef])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track, setTrack,
        playStatus,setPlayStatus,
        time, setTime,
        play,pause,
        playWithId,
        previous,next,
        seekSong
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;