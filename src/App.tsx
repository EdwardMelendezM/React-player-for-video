import ReactPlayer from "react-player";
import { useState, useRef } from 'react'
import "./App.css"


const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const ref = useRef(null)
  const handleClickOnPlay = () => {
    console.log(ref.current);

    if (!isAuth) {
      if (ref.current) {
        console.log(ref.current);
      }
      return;
    }
  }
  const handleClickOnPause = () => {
    console.log("Esto se pauseo");

  }
  const handleClickOnError = () => {
    console.log("Ocurrio un error");

  }
  const handleOnStart = () => {
    setTimeout(() => {
      console.log("Esperando");

    }, 2000);
    if (!ref.current) return
    ref.current.playing = true
  }
  return (
    <div className="container">
      <ReactPlayer
        url='/video.mp4'
        controls
        muted
        onPause={handleClickOnPause}
        onPlay={handleClickOnPlay}
        ref={ref}
        loop
        onError={handleClickOnError}
        light={true}
        onStart={handleOnStart}
      />
    </div>
  );
}

export default App;