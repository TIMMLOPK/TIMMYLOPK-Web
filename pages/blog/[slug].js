import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Box, Heading, Link } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import styles from '../style.module.css'

function PostPage({ frontmatter: { title, date }, content }) {
  return (
    <>
      <Layout>
        <NextLink href="/blog">
          <Link color="Highlight">Blog</Link>
        </NextLink>
        <Box as="span" color="#A0AEC0">
          <Box display="inline-block">
            <ChevronRightIcon />
          </Box>
          <Box display="inline-block">{title}</Box>
        </Box>

        <Box position="relative">
          <Heading>{title}</Heading>
          <Box pt={5}>Posted on {date}</Box>
          <Box fontSize="110%" lineHeight="2.3" margin="10px 0">
            <Box
              dangerouslySetInnerHTML={{ __html: marked(content) }}
              className={styles.postbody}
            />
          </Box>
        </Box>
      </Layout>
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
