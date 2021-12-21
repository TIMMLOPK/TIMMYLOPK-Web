import { Box,Stack } from '@chakra-ui/react'
import { currentDayName } from '../utils/dateUtils'
import Link from 'next/link'

const Footer = () => (
  <Box as="footer" maxW="3x2" py="5">
    &copy; {new Date().getFullYear()} Today:{currentDayName()}!
    <Stack>
      <Box as='button' alignSelf={{ base: 'center', sm: 'start' }} color="#A0AEC0"><Link href='/policy'>Website Policy</Link></Box>
    </Stack>
  </Box>
)

export default Footer
