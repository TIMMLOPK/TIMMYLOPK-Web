import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

const Music = () => {
  const [ismute, setOpen] = useState(true);

  return (
    <><div>
      <ReactAudioPlayer
        muted={ismute ? false:true}
        src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        loop
        autoPlay
         />
    </div><button onClick={() => setOpen(!ismute)}>click me!</button>
    </>
  );
};


export default Music
