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
import { useEffect, useState } from 'react'

const Bottombar = ({ inview }) => {
  const url = useRouter().asPath
  const { onCopy, hasCopied } = useClipboard('https://www.lionceu.live' + url)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollTo = id => {
    const el = document.getElementById(id)
    el.scrollIntoView(true, { behavior: 'smooth' })
  }
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 500) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)
  return (
    <>
      <Stack position="fixed" bottom="10" zIndex={1} right={5}>
        {inview && (
          <>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                w="50px"
                h="50px"
                borderRadius="50%"
                boxShadow="lg"
                icon={<CgMenuMotion />}
                _dark={{
                  bg: 'gray.700',
                  color: 'white'
                }}
              />
              <MenuList>
                <MenuItem onClick={() => scrollTo('代購須知')}>
                  代購須知
                </MenuItem>
                <MenuItem onClick={() => scrollTo('付款方式')}>
                  付款方式
                </MenuItem>
                <MenuItem onClick={() => scrollTo('交收方式')}>
                  交收方式
                </MenuItem>
                <MenuItem onClick={() => scrollTo('運送時效')}>
                  運送時效
                </MenuItem>
                <MenuItem onClick={() => scrollTo('風險披露')}>
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
              _dark={{
                bg: 'gray.700',
                color: 'white'
              }}
              aria-label="Toggling Theme"
            />
          </>
        )}
        <Button
          w="50px"
          h="50px"
          borderRadius="50%"
          boxShadow="lg"
          onClick={onCopy}
          _dark={{
            bg: 'gray.700',
            color: 'white'
          }}
        >
          {hasCopied ? <CheckIcon /> : <CopyIcon />}
        </Button>
        <Button
          onClick={scrollToTop}
          display={showScrollToTop ? 'flex' : 'none'}
          w="50px"
          h="50px"
          borderRadius="50%"
          boxShadow="lg"
          _dark={{
            bg: 'gray.700',
            color: 'white'
          }}
        >
          <AiOutlineVerticalAlignTop />
        </Button>
      </Stack>
    </>
  )
}

export default Bottombar
