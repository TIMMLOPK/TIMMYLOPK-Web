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
          <Heading fontSize="25px">Project Wall</Heading>
          <Card
            href="https://discord.lionceu.live/"
            name="TIMMYLOPK"
            cardImage={image1}
            buttonMessage="Visit the website"
          >
            Discord bot
          </Card>
          <Card
            href="https://meme-maker-sec.vercel.app/"
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

export { getServerSideProps } from '../components/theme-cookie'

export default project
