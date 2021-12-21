import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import SunIcon from './icons/Sunicon'
import MoonIcon from './icons/Moonicon'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        whileTap={{ scale: 0.95, rotate: 15 }}
      >
        <IconButton
          variant="ghost"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          style={{ boxShadow: "none" }}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
