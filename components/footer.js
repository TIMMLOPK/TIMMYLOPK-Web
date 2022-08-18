import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={5}>
      &copy; All Rights Reserved {new Date().getFullYear()}
    </Box>
  )
}

export default Footer
