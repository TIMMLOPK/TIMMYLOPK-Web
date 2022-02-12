import { Stack } from '@chakra-ui/layout'
import { AiOutlineVerticalAlignTop } from 'react-icons/ai'
import CopyToClipboard from 'react-copy-to-clipboard'
import React, { useState } from 'react'
import { Alert, AlertTitle, Button, CloseButton } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

const Bottombar = () => {
  //share btn
  const url = window.location.href

  const [state, setState] = useState({
    value: url,
    copied: false
  })

  //Back to top btn

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Stack position="fixed" bottom="11">
        {state.copied ? (
          <Alert status="info">
            <AlertTitle>Copied</AlertTitle>
            <CloseButton onClick={() => setState({ copied: false })} />
          </Alert>
        ) : null}

        <Stack position="fixed" bottom="10" left="85%">
          <CopyToClipboard
            text={state.value}
            onCopy={() => setState({ copied: true })}
          >
            <Button w="50px" h="50px" borderRadius="50%" boxShadow="lg">
              <CopyIcon />
            </Button>
          </CopyToClipboard>

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
      </Stack>
    </>
  )
}

export default Bottombar
