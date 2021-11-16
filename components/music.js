import React, { useState } from "react";
import ReactHowler from 'react-howler';
import { Button } from "@chakra-ui/button";

const Music = () => {
  const [ismute, setOpen] = useState(true);

  return (
    <><div>
      <ReactHowler
        src='../y2mate.com_-_MV.mp3'
        playing={ismute ? false:true}
        html5={true}
         />
    </div><Button onClick={() => setOpen(!ismute)}>Play music</Button>
    </>
  );
};


export default Music
