import React from 'react'
import { FaMusic, FaHeart, FaComment, FaShare } from 'react-icons/fa';
import {useRef, useState, useEffect} from 'react'
import { useElementOnScreen } from "../App";
const VideoInfo = ({avatar, idName, nickName, content, music}) => {
    return (
        <div className="flex flex-row">
            <img className="rounded-full w-[50px] h-[50px]" src={avatar} alt=""></img>
            <div className="ml-3 min-w-[80%]">
                <div>
                    <a href="#" className="text-xl font-bold hover:underline">{idName}</a>
                    <a href="#" className="text-xl ml-2">{nickName}</a>
                </div>
                <div className="mb-3">
                   {content}
                </div>
                <div className="flex flex-row items-center">
                    <FaMusic/><span className="ml-3">{music}</span>
                </div>
            </div>
            <div>
                <button className="p-1 pl-3 pr-3 border-2 border-red-200 text-red-400 rounded-md">Follow</button>
            </div>
        </div>
    )
}


const VideoContent = ({video,like, comment, share}) => {
    const videoRef = useRef()
    const [playing, setPlaying] = useState(false)
    const handleVideo = () => {
        if(!playing) {
            videoRef.current.play()
            setPlaying(true)
        }else {
            videoRef.current.pause()
            setPlaying(false)
        }
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      };
      const isVisibile = useElementOnScreen(options, videoRef);
      useEffect(() => {
        if (isVisibile) {
          if (!playing) {
            videoRef.current.play();
            setPlaying(true);
          }
        } else {
          if (playing) {
            videoRef.current.pause();
            setPlaying(false);
          }
        }
      }, [isVisibile]);
    return (
        <div className="flex flex-row ">
            <video 
                ref={videoRef}
                onClick={handleVideo}
                className="w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4"
                src={video}
                loop>
            </video>
            <div className="flex flex-col justify-end ml-5  " >
                <div className="text-center mb-4">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaHeart className="text-xl"/>
                    </div>
                    <span>{like}</span>
                </div>
                
                <div className="text-center mb-4">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaComment className="text-xl"/>
                    </div>
                    <span>{comment}</span>
                </div>
                
                <div className="text-center mb-4">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <FaShare className="text-xl"/>
                    </div>
                    <span >{share}</span>
                </div>
                
            </div>
            
            
        </div>
    )
}
const Video = ({data}) => {
  return (
    <div className="snap-start max-w-[600px] border-b-2 border-gray-200 pb-10 pt-10">
        <VideoInfo {...data}/>
        <VideoContent {...data}/>
    </div>
  )
}
export default Video;
