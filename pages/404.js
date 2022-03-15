import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container position="relative">
      <Heading as="h1">Lose signal</Heading>
      <Text>The connection to the communication system is interrupted.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Return to base</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
