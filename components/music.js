import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

const Music = () => {
  const [ismute, setOpen] = useState(true);

  return (
    <><div>
      <ReactAudioPlayer
        muted={ismute ? false:true}
        src='../y2mate.com_-_MV.mp3'
        loop
        autoPlay
         />
    </div><button onClick={() => setOpen(!ismute)}>Mute music</button>
    </>
  );
};


export default Music
