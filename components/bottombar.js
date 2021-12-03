import { Box,Stack } from "@chakra-ui/layout";
import { AiOutlineVerticalAlignTop, AiOutlineShareAlt }from "react-icons/ai"
import CopyToClipboard from "react-copy-to-clipboard";
import React,{ useState } from "react";
import {
  Alert,
  AlertTitle,
  CloseButton
} from "@chakra-ui/react"

const Bottombar = () => {

//share btn
  const url =window.location.href

    const [state, setState] = useState({
      value:url,
      copied: false});

//Back to top btn

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
      
    return(
        <>
        <Stack
         display={{ base: 'none', md: 'flex' }}
        >
        <CopyToClipboard text={state.value}
          onCopy={() => setState({copied: true})}>
        <Box as='button'>
      <AiOutlineShareAlt/>
        </Box>
        </CopyToClipboard>


</Stack>

<Stack position="fixed" bottom='10'>

    {state.copied ? <Alert status="info">
  <AlertTitle>Copied</AlertTitle>

  <CloseButton  onClick={() => setState({copied: false})}></CloseButton>

</Alert>: null}

     <Stack
    position="fixed"
    bottom='0'
    left="0"
    right="0"
    w="100%"
    css={{ backdropFilter: 'blur(20px)' }}
    display={{md:'none'}}
    >

        <CopyToClipboard text={state.value}
          onCopy={() => setState({copied: true})}>
        <Box as='button'>
        <AiOutlineShareAlt/>
        </Box>
        </CopyToClipboard>

        <Box as='button' onClick={scrollToTop} paddingLeft="50%">
          <AiOutlineVerticalAlignTop/>
        </Box>
    </Stack>
    </Stack>
    </>
  );
};

export default Bottombar
