import {
  Center,
  Stack,
  Text,
  Button,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

const Card = ({
  children,
  name,
  href,
  _target,
  cardImage,
  buttonMessage,
  ...props
}) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        transition: {
          duration: 0.2
        }
      }}
    >
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w="100%"
          h="100%"
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'black')}
          boxShadow="dark-lg"
          padding={4}
        >
          <Image
            src={cardImage}
            width="250"
            height="150"
            alt="Project"
            objectFit="cover"
            placeholder="blur"
            loading="lazy"
          />
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
            <Text fontWeight={500} color="gray.500" size="sm" mb={4}>
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
              <NextLink href={href} passHref prefetch={false}>
                <Button
                  flex={1}
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
                  {buttonMessage}
                </Button>
              </NextLink>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </motion.div>
  )
}

export default Card
