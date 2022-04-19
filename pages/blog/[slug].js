import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import {
  Box,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import styles from '../style.module.css'
import Bottombar from '../../components/menu'

function PostPage({ frontmatter: { title, date }, content }) {
  return (
    <>
      <Layout>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          position="relative"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
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
