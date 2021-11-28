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
      const [setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
      
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

<Stack position='fixed' bottom='10'>

    {state.copied ? <Alert status="info">
  <AlertTitle>Copied</AlertTitle>

  <CloseButton  onClick={() => setState({copied: false})}></CloseButton>

</Alert>: null}

     <Stack 
    position='fixed'
    bottom='0'
    css={{ backdropFilter: 'blur(20px)' }}
    w='100%'
    display={{ base: 'inline-block',md:'none'}}
    >

        <CopyToClipboard text={state.value}
          onCopy={() => setState({copied: true})}>
        <Box as='button'>
        <AiOutlineShareAlt/>
        </Box>
        </CopyToClipboard>

        <Box as='button' onClick={scrollToTop}  fontsize='5px' paddingLeft='40%'>
          <AiOutlineVerticalAlignTop/>
        </Box>
    </Stack>
    </Stack>
    </>
  );
};

export default Bottombar
