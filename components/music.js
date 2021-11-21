import React, { useState } from "react";
import ReactHowler from 'react-howler';
import { Button } from "@chakra-ui/button";
import { HiOutlineMusicNote } from "react-icons/hi";

const songsCollections = ['/music/y2matecom-back_numbercover.mp3', '/music/y2mate.com_-_Sleepless_Night.mp3', '/music/y2mate.com_-_MV.mp3'];

const getRandomFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomSongIndex = getRandomFromRange(0, songsCollections.length);

console.log('Random song index is ', randomSongIndex)

const randomSong = songsCollections[randomSongIndex];

const Audio =randomSong

const Music = () => {
  const [ismute, setOpen] = useState(true);

  return (
    <><div>
      <ReactHowler
        src={Audio}
        playing={ismute ? false:true}
        html5={true}
         />
    </div><Button onClick={() => setOpen(!ismute)} colorScheme="blue" variant="ghost" ><HiOutlineMusicNote/></Button>
    </>
  );
};


export default Music
