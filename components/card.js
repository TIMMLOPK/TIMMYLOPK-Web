import {
  Center,
  Stack,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'
import NextLink from 'next/link'

const Card = ({ children, href, _target, ...props }) => {
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
        <Flex flex={1} bg="gray.400"></Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'4x1'} fontFamily={'body'}>
            My Project
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            @{children}
          </Text>
          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <NextLink href={href} passHref>
              <Button
                as="a"
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
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
