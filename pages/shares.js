import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Card from '../components/card'

const Info = () => {
  return (
    <Layout title="Sharing">
      <Container>
        <Heading as="h3" fontSize={27} mb={4} variant="section-title">
          Sharing and Tips
        </Heading>
        <Box paddingBottom="5">
          <Paragraph>
            As you know ,I am a Javascript devloper.I have devloped 3
            project.You can see them in Github.
          </Paragraph>
        </Box>
        <Heading as="h3" fontSize={20}>
          --Typical employers of software developers--
        </Heading>
        <Paragraph>
          A programmer need a good debug skill as you face various error of your
          project.
        </Paragraph>
        <Heading as="h3" fontSize={20}>
          How learn devloping program ?
        </Heading>
        <Paragraph>
          {' '}
          My suggestion is starting with project. A project can help you to get.
        </Paragraph>
        <Heading as="h3" fontSize={20}>
          What is the tips?
        </Heading>
        <Paragraph>
          Using the different platform to get information and solve your problem
          .
        </Paragraph>
        <Box as="b">Keep going is a big tip</Box>
        <Box display="none">
          <Card href="https://github.com/TIMMLOPK/once">once</Card>
        </Box>
      </Container>
    </Layout>
  )
}
export default Info
