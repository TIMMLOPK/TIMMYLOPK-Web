import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/shop'
import Paragraph from '../components/paragraph'

const Info = () => (
  <Layout title="Info">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Sharing
      </Heading>
      <Paragraph>As you know ,I am a Javascript devloper.I have devloped 3 website.</Paragraph>
        <Heading as='h3' fontSize={25}>Typical employers of software developers</Heading>
        <Paragraph>A programmer need a good debug skill as you face various error of your project.</Paragraph>
        <Heading as='h3' fontSize={25}>How learn a program language ?</Heading>
        <Paragraph> My suggestion is starting with project.A project can make you know the language logical.</Paragraph>
        <Heading as='h3' fontSize={25}>What is the tips?</Heading>
        <Paragraph>Using the different platform to get or solve your problem .</Paragraph>
       <Box as='a'>Keep going is a big tip</Box>
       </Container>
  </Layout>
)
export default Info