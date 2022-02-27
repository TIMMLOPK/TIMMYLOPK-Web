import {
  Center,
  Stack,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

const Card = ({ children, name, href, _target, cardImage, ...props }) => {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '400px', md: '10rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'black')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1}>
          <Image src={cardImage} width="250%" height="100%" alt="Project" />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize="4x1" fontFamily="body">
            {name}
          </Heading>
          <Text fontWeight={600} color="gray.500" size="sm" mb={4}>
            @{children}
          </Text>
          <Stack
            width="100%"
            mt="2rem"
            direction="row"
            padding={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <NextLink href={href} passHref>
              <Button
                flex={1}
                fontSize="sm"
                rounded="full"
                bg="blue.400"
                color="white"
                _target={_target}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500'
                }}
                _focus={{
                  bg: 'blue.500'
                }}
                {...props}
              >
                Visit Code
              </Button>
            </NextLink>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  )
}

export default Card
