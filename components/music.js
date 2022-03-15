import React, { useState, useEffect } from 'react'
import ReactHowler from 'react-howler'
import { Button } from '@chakra-ui/button'
import { AiFillPlayCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Tooltip } from '@chakra-ui/react'

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
  const [playing, setplaying] = useState(true)
  const [loading, setloading] = useState(true)
  const [loaded, setloaded] = useState(false)

  useEffect(() => {
    setloaded(true)
  }, [])

  return (
    <>
      <div>
        <ReactHowler
          src={Audio}
          preload={loaded}
          playing={playing ? false : true}
          onLoad={() => setloading(false)}
        />
      </div>
      <div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [0.5, 1.1] }}
          transition={{ type: 'spring', duration: 0.2 }}
        >
          <Tooltip
            label={Audio.replace('/music/', 'Playing: ').replace('.mp3', '')}
          >
            <Button
              onClick={() => setplaying(!playing)}
              variant="ghost"
              _active={{ bg: 'transparent' }}
              style={{ boxShadow: 'none' }}
              _hover={{ bg: 'transparent' }}
              isLoading={loading}
            >
              <AiFillPlayCircle />
            </Button>
          </Tooltip>
        </motion.div>
      </div>
    </>
  )
}

export default Music
