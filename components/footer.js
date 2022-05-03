import { Box, Stack } from '@chakra-ui/react'
import Link from 'next/link'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={5}>
      &copy; {new Date().getFullYear()} Timmy All Rights Reserved.
      <Stack>
        <Box as="button" align="center">
          <Link href="/policy" prefetch={false}>
            Website Policy
          </Link>
        </Box>
      </Stack>
    </Box>
  )
}

export default Footer
