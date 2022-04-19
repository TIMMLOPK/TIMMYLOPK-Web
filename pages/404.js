import NextLink from 'next/link'
import { Box, Heading, Button } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <>
      <Heading as="h1">Lose signal</Heading>
      <p>The connection to the communication system is interrupted.</p>
      <Box my={6}>
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Back to base</Button>
        </NextLink>
      </Box>
    </>
  )
}

export default NotFound
