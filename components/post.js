import {
  Center,
  Stack,
  Text,
  Heading,
  Box,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ImageWrapper = chakra(Image, {
  baseStyle: { maxH: 340, maxW: 170 },
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
export default function Post({ post }) {
  return (
    <>
      <Center py={7} position="relative">
        <Box maxW="800px" w="full" h="full">
          <ImageWrapper
            src="/images/card.png"
            alt="card"
            width={340}
            height={170}
            borderRadius={10}
          />
          <Stack>
            <Stack direction="column" fontSize="md" mt={1}>
              <Text color="gray.500">{post.frontmatter.date}</Text>
            </Stack>
          </Stack>
          <Stack direction="row" align={'center'} mt={2}>
            <motion.div
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2
                }
              }}
            >
              <NextLink href={`/blog/${post.slug}`} passHref>
                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize="xl"
                  fontFamily="body"
                  cursor="pointer"
                >
                  {post.frontmatter.title}
                </Heading>
              </NextLink>
            </motion.div>
          </Stack>
        </Box>
      </Center>
      <style jsx>{`
        .posts-img {
          border-radius: 5px;
        }
      `}</style>
    </>
  )
}
