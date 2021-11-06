import { Box } from '@chakra-ui/react'
import { currentDayName } from '../utils/dateUtils'

const Footer = () => {
  return (
    <Box as="footer" maxW="7xl" py="12">
      &copy; {new Date().getFullYear()} Happy!{currentDayName()} Timmy  
    </Box>
  )
}

export default Footer
