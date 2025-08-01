"use client"
import { X, XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"
const VideoPlayer = ({videoId}) => {
    if (!videoId) return;

    const [isOpen, setIsOpen] = useState(true)

    const handlePlayer = () => {
        setIsOpen((prevState) => !prevState)
    }


    const option = {
        width: "300",
        heigth: "340"
    }

    const Player = () => {
        return (
        <>
            <div className="fixed bottom-2 right-2">
                <button className="text-white float-right text-2xl mb-1 px-3 font-bold cursor-pointer hover:text-[#FFD369]" onClick={handlePlayer}>X</button>
                <YouTube videoId={videoId} 
                onReady={(event) => event.target.pauseVideo()}
                opts={option}/>
            </div>
        </>
        )
    }

    return isOpen ? <Player /> : <button className="fixed bottom-5 right-7 bg-[#171717] text-white border p-3 rounded cursor-pointer hover:text-[#FFD369]" onClick={handlePlayer}>Open Trailer</button>
} 

export default VideoPlayer