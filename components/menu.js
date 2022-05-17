import { AiOutlineVerticalAlignTop } from 'react-icons/ai'
import {
  Button,
  Stack,
  useClipboard,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { CopyIcon, CheckIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { CgMenuMotion } from 'react-icons/cg'
import { SunIcon } from './icons/Sunicon'
import { MoonIcon } from './icons/Moonicon'

const Bottombar = ({ inview }) => {
  const url = useRouter().asPath
  const { onCopy, hasCopied } = useClipboard('https://www.lionceu.live' + url)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)
  return (
    <>
      <Stack
        position="fixed"
        bottom="10"
        right={{ base: '10', md: '100' }}
        zIndex={1}
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            w="50px"
            h="50px"
            borderRadius="50%"
            boxShadow="lg"
            icon={<CgMenuMotion />}
            display={inview ? 'flex' : 'none'}
          />
          <MenuList>
            <MenuItem as="a" href="#1">
              代購須知
            </MenuItem>
            <MenuItem as="a" href="#2">
              付款方式
            </MenuItem>
            <MenuItem as="a" href="#3">
              交收方式
            </MenuItem>
            <MenuItem as="a" href="#4">
              運送時效
            </MenuItem>
            <MenuItem as="a" href="#5">
              風險披霹
            </MenuItem>
          </MenuList>
        </Menu>
        <IconButton
          onClick={() => toggleColorMode()}
          icon={<SwitchIcon />}
          w="50px"
          h="50px"
          borderRadius="50%"
          boxShadow="lg"
          display={inview ? 'flex' : 'none'}
        />
        <Button
          w="50px"
          h="50px"
          borderRadius="50%"
          boxShadow="lg"
          onClick={onCopy}
        >
          {hasCopied ? <CheckIcon /> : <CopyIcon />}
        </Button>
        <Button
          onClick={scrollToTop}
          w="50px"
          h="50px"
          borderRadius="50%"
          boxShadow="lg"
        >
          <AiOutlineVerticalAlignTop />
        </Button>
      </Stack>
    </>
  )
}

export default Bottombar
