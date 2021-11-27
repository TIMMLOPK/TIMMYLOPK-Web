import { Box,Stack } from "@chakra-ui/layout";
import { BsShare } from "react-icons/bs"
import CopyToClipboard from "react-copy-to-clipboard";
import { useState} from "react";

const clip = () => {

  const hostname = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';

    const [state, setState] = useState({
      value:{hostname},
      copied: false,
    });
  
    return(
        <>
        <Stack>
        <CopyToClipboard text={state.value}
          onCopy={() => setState({copied: true})}>
        <Box as='button'>
      <BsShare/>
        </Box>
        </CopyToClipboard>
</Stack>
     <Stack 
    position='fixed'
    bottom="0"
    css={{ backdropFilter: 'blur(10px)' }}
    w="100%"
    h="30px"
    display={{ base: 'inline-block', md: 'none' }}>

        <CopyToClipboard text={state.value}
          onCopy={() => setState({copied: true})}>
        <Box as='button' >
      <BsShare/>
        </Box>
        </CopyToClipboard>
    </Stack>
    </>
  );
};

export default  clip
