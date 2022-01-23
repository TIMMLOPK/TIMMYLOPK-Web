import path from 'path'
import fs from 'fs-extra'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { Box, Button } from '@chakra-ui/react'

function PostPage({ frontmatter: { title, date }, content }) {
  return (
    <>
      <Link href="/blog" passHref>
        <Button>Go Back</Button>
      </Link>
      <Box position="relative" p="0px 20px">
        <Box fontSize="25" lineHeight="2.3">
          {title}
        </Box>
        <Box marginBottom="10px" p="2px 5px">
          Posted on {date}
        </Box>
        <Box fontSize="110%" lineHeight="2.3" margin="10px 0">
          <Box dangerouslySetInnerHTML={{ __html: marked(content) }}></Box>
        </Box>
      </Box>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content
    }
  }
}

export default PostPage
