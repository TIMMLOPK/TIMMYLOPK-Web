import React, { useState } from 'react'
import ReactHowler from 'react-howler'
import { Button } from '@chakra-ui/button'
import { AiFillPlayCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'

const songsCollections = [
  '/music/musicass1.mp3',
  '/music/musicass2.mp3',
  '/music/musicass3.mp3'
]

const getRandomFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const randomSongIndex = getRandomFromRange(0, songsCollections.length)

const randomSong = songsCollections[randomSongIndex]

const Audio = randomSong

const Music = () => {
  const [ismute, setOpen] = useState(true)
  const [loading, setloading] = useState(true)

  return (
    <>
      <div>
        <ReactHowler
          src={Audio}
          playing={ismute ? false : true}
          onLoad={() => setloading(false)}
        />
      </div>
      <div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [0.5, 1.4, 1.2, 1.1] }}
          transition={{ type: 'spring' }}
        >
          <Button
            onClick={() => setOpen(!ismute)}
            variant="ghost"
            _active={{ bg: 'transparent' }}
            style={{ boxShadow: 'none' }}
            _hover={{ bg: 'transparent' }}
            isLoading={loading}
          >
            <AiFillPlayCircle />
          </Button>
        </motion.div>
      </div>
    </>
  )
}

export default Music
