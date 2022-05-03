import { AiOutlineVerticalAlignTop } from 'react-icons/ai'
import { Button, Stack, useClipboard } from '@chakra-ui/react'
import { CopyIcon, CheckIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const Bottombar = () => {
  const url = useRouter().asPath
  const { onCopy, hasCopied } = useClipboard('https://www.lionceu.live' + url)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Stack position="fixed" bottom="10" left="85%" zIndex={1}>
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
