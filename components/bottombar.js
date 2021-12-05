import { Box, Stack } from "@chakra-ui/layout";
import { AiOutlineVerticalAlignTop, AiOutlineShareAlt } from "react-icons/ai"
import CopyToClipboard from "react-copy-to-clipboard";
import React, { useState } from "react";
import {
  Alert,
  AlertTitle,
  CloseButton,
  useColorModeValue
} from "@chakra-ui/react"

const Bottombar = () => {

  //share btn
  const url = window.location.href

  const [state, setState] = useState({
    value: url,
    copied: false
  });

  //Back to top btn

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Stack
        display={{ base: 'none', md: 'flex' }}
      >
        <CopyToClipboard text={state.value}
          onCopy={() => setState({ copied: true })}>
          <Box as='button'>
            <AiOutlineShareAlt />
          </Box>
        </CopyToClipboard>


      </Stack>

      <Stack position="fixed" bottom='10'>

        {state.copied ? <Alert status="info">
          <AlertTitle>Copied</AlertTitle>

          <CloseButton onClick={() => setState({ copied: false })}></CloseButton>

        </Alert> : null}

        <Stack
          position="fixed"
          bottom='0'
          left="0"
          right="0"
          w="100%"
          display={{ md: 'none' }}
          bg={useColorModeValue('#f0e7db', '#202023')}
          boxShadow="rgba(0, 0, 0, 0.40) 0px 5px 15px"
        >

          <CopyToClipboard text={state.value}
            onCopy={() => setState({ copied: true })}>
            <Box as='button' color={useColorModeValue("#000000", "#FFFFFF")}>
              <AiOutlineShareAlt />
            </Box>
          </CopyToClipboard>

          <Box as='button' onClick={scrollToTop} paddingLeft="50%" color={useColorModeValue("#000000", "#FFFFFF")}>
            <AiOutlineVerticalAlignTop />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Bottombar
