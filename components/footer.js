import { Box } from '@chakra-ui/react'
import { currentDayName } from '../utils/dateUtils'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Happy!{currentDayName()} Timmy  
    </Box>
  )
}

export default Footer
