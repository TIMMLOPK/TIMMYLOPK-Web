import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/post'
import { sortByDate } from '../utils/day'
import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

function Blog({ posts }) {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} position="relative">
          Astronaut&apos;s blog
        </Heading>
        {posts.map((posts, index) => (
          <Post key={index} post={posts} />
        ))}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')
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
