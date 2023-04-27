import ReactPlayer from "react-player";
import { useState, useRef } from 'react'



const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const ref = useRef(null)
  const handleClickOnPlay = () => {
    console.log(ref.current);

    if (!isAuth) {
      alert("Dont have authorization")
      if (ref.current) {

        console.log(ref.current.player);

      }
      return;
    }
  }
  return (
    <div>
      <ReactPlayer
        url='/video.mp4'
        controls
        muted
        onPlay={handleClickOnPlay}
        ref={ref}

      />
      <button onClick={() => setIsAuth(true)}>Auth</button>
    </div>
  );
}

export default App;