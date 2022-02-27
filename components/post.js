import {
  Center,
  Stack,
  Text,
  Heading,
  Avatar,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

export default function Post({ post }) {
  return (
    <Center py={6} position="relative">
      <Box
        maxW="500px"
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="lg"
        rounded="lg"
        p={6}
      >
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize="2xl"
            fontFamily="body"
          >
            <NextLink href={`/blog/${post.slug}`} passHref>
              {post.frontmatter.title}
            </NextLink>
          </Heading>
          <Text color="gray.500"></Text>
        </Stack>
        <Stack mt={6} direction="row" spacing={4} align={'center'}>
          <NextLink href="https://www.instagram.com/tw_wu_as_tim/" passHref>
            <Avatar src="/images/icon.webp" alt="Author" />
          </NextLink>
          <Stack direction={'column'} spacing={0} fontSize="md">
            <Text fontWeight={600}>Timmy Wu</Text>
            <Box fontSize={15}>
              <MdOutlineAdminPanelSettings />
            </Box>
            <Text color="gray.500">{post.frontmatter.date}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}
