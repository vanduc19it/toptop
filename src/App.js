import './App.css';
import Video from './components/Video'
import { useEffect, useState, useMemo } from 'react';
import db from "./firebase";
function App() {
  const [videos,setVideos] = useState([])
  useEffect(() => {
    db.collection("videos")
      .get()
      .then((querySnapshot) => {
        setVideos(querySnapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div 
    id="focus"
    tabIndex="1" 
    className="flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden" >
      {videos.map(video => <Video data= {video}/>)}
    </div>
  );
}

export const useElementOnScreen = (options, targetRef) => {
  const [isVisibile, setIsVisible] = useState();
  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]
    setIsVisible(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isVisibile;
};

export default App;
