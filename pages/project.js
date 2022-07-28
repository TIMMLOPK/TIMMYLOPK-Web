import { Container, Heading, Stack } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Card from '../components/card'

import image1 from '../public/images/card.png'
import image2 from '../public/images/meme.png'

const project = () => {
  return (
    <Layout>
      <Container position="relative">
        <Stack pt={5}>
          <Heading as="h3" fontSize={25} mb={4} position="relative">
            Project Wall
          </Heading>
          <Card
            name="npm outdated.rs"
            href="https://github.com/TIMMLOPK/npm-outdated-rs"
            cardImage={image1}
            buttonMessage="Visit the repository"
          >
            List outdated packages
          </Card>
          <Card
            href="https://discord.lionceu.live/"
            name="ONCE"
            cardImage={image1}
            buttonMessage="Visit the website"
          >
            Discord bot
          </Card>
          <Card
            href="https://meme.lionceu.live/"
            name="MEME Generator"
            cardImage={image2}
            buttonMessage="Visit the website"
          >
            MEME Generator
          </Card>
          <Card
            href="https://github.com/TIMMLOPK/once"
            name="CSS Website"
            cardImage={image1}
            buttonMessage="Visit the repository"
          >
            A simple website by css
          </Card>
        </Stack>
      </Container>
    </Layout>
  )
}

export default project
