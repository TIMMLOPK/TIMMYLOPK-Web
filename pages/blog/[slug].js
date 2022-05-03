import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Box, Button, Heading } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import styles from '../style.module.css'
import Bottombar from '../../components/menu'
import { useRouter } from 'next/router'

function PostPage({ frontmatter: { title, date }, content }) {
  const router = useRouter()
  return (
    <>
      <Layout>
        <Button mb={5} onClick={() => router.back()} size="md">
          ← Back
        </Button>
        <Box position="relative">
          <Heading>{title}</Heading>
          <Box pt={5}>Posted on {date}</Box>
          <Box lineHeight="2.3" margin="10px 0">
            <Box
              dangerouslySetInnerHTML={{ __html: marked(content) }}
              className={styles.postbody}
            />
          </Box>
        </Box>
      </Layout>
      <Bottombar />
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
