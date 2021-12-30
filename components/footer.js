import { Box, Stack } from '@chakra-ui/react'
import Link from 'next/link'

const Footer = () => (
  <Box align="center" opacity={0.4} fontSize="sm">
    &copy; {new Date().getFullYear()} Timmy All Rights Reserved.
    <Stack>
      <Box as='button' align="center" color="#A0AEC0"><Link href='/policy'>Website Policy</Link></Box>
    </Stack>
  </Box>
)

export default Footer
