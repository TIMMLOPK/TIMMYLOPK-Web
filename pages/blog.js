import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/post'
import { sortByDate } from '../utils/day'
import {
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Box,
  Divider,
  InputGroup,
  InputRightElement,
  CloseButton
} from '@chakra-ui/react'
import { useState, useRef } from 'react'
import Layout from '../components/layouts/article'
import { AiOutlineSearch } from 'react-icons/ai'

function Blog({ posts }) {
  const [update, setupdate] = useState('All')
  const [value, setvalue] = useState('none')

  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.focus()
  }

  return (
    <Layout title="Blog">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} position="relative">
          Astronaut&apos;s blog 🗞️
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display="flex"
          width={{ base: 'full', md: 'auto' }}
          mt={{ base: 4, md: 0 }}
        >
          <Button
            onClick={() => {
              setupdate('All')
            }}
            bg="burlywood"
            _hover="none"
          >
            All
          </Button>
          <Button
            onClick={() => setupdate('update')}
            bg="burlywood"
            _hover="none"
          >
            Update
          </Button>
          <InputGroup>
            <Input
              placeholder="Search"
              type="text"
              value={null}
              onKeyUp={e => {
                setupdate(e.currentTarget.value)
              }}
              onKeyDown={() => setvalue('flex')}
              variant="filled"
              ref={inputEl}
            />
            <InputRightElement width="4.5rem">
              <CloseButton
                variant="ghost"
                style={{ boxShadow: 'none' }}
                h="1.75rem"
                size="sm"
                onClick={() => {
                  setupdate('All')
                  setvalue('none')
                }}
              />
            </InputRightElement>
          </InputGroup>
        </Stack>
        {posts
          .filter(post => post.frontmatter.tag.includes(update))
          .map((posts, index) => (
            <Post key={index} post={posts} />
          ))}
        <Stack pt={5} display={value} direction={{ base: 'column', md: 'row' }}>
          <Box pt={2}>No matching result</Box>
          <Button onClick={onButtonClick} rightIcon={<AiOutlineSearch />}>
            Try search again
          </Button>
        </Stack>
        <Divider my={6} />
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}

export default Blog
