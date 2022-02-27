import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon } from './icons/Sunicon'
import { MoonIcon } from './icons/Moonicon'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <IconButton
      variant="ghost"
      onClick={() => toggleColorMode()}
      icon={<SwitchIcon />}
      _hover={{ bg: 'transparent' }}
      _active={{ bg: 'transparent' }}
      style={{ boxShadow: 'none' }}
    />
  )
}

export default ThemeToggleButton
