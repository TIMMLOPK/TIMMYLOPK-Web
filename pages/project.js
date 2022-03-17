import { Container, Heading, Stack } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Card from '../components/card'

import image1 from '../public/card.png'
import image2 from '../public/meme.png'

const project = () => {
  return (
    <Layout title="Project">
      <Container position="relative">
        <Stack pt={5}>
          <Heading fontSize="25px">My project</Heading>
          <Card href="/" name="TIMMYLOPK" isDisabled cardImage={image1}>
            Discord bot
          </Card>
          <Card
            href="https://meme-maker-sec.vercel.app/"
            name="MEME Generator"
            cardImage={image2}
          >
            MEME Generator
          </Card>
          <Card
            href="https://github.com/TIMMLOPK/once"
            name="CSS Website"
            cardImage={image1}
          >
            A simple website by css
          </Card>
        </Stack>
      </Container>
    </Layout>
  )
}

export { getServerSideProps } from '../components/theme-cookie'

export default project
