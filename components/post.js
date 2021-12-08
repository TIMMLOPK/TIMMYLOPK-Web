import Link from 'next/link'
import { Button } from '@chakra-ui/button'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Post({ post }) {
  return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' />

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <div className= 'post-title'>{post.frontmatter.title}</div>

      <div className= 'des'>{post.frontmatter.excerpt}</div>

      <Link href={`/blog/${post.slug}`} passHref>
       <Button rightIcon={<ChevronRightIcon />} size="sm">Read More
       </Button>
      </Link>
    </div>
  )
  }