import { Box,Stack } from '@chakra-ui/react'
import { currentDayName } from '../utils/dateUtils'
import Link from 'next/link'

const Footer = () => {
  return (
    <Box as="footer" maxW="7xl" py="12">
      &copy; {new Date().getFullYear()} Happy!{currentDayName()} Timmy  
    <Stack>
      <Box as='button' alignSelf={{ base: 'center', sm: 'start' }}><Link href='/policy'>----Website Policy</Link></Box>
      </Stack>
    </Box>
  )
}

export default Footer
