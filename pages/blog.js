import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/post'
import { sortByDate } from '../utils/day'
import { Container, Heading } from '@chakra-ui/react'
import Section from '../components/section'

function Blog({ posts }) {
  return (
    <layout title="blog" className='blog'>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Blog
        </Heading>

        <Section delay={0.1}>
          <div className='posts'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </Section>

      </Container>
    </layout>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
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
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
export default Blog