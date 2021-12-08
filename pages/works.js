import { Container, Heading,SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/shop'
import Paragraph from '../components/paragraph'
import info1 from '../public//images/info1.jpg';
import { GridItem } from '../components/grid-item'

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
    </Container>
    <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="\"
            title=""
            thumbnail={info1}
          >
          </GridItem>
          <GridItem
            href="\"
            title=""
            thumbnail={info1}
          >
          </GridItem>
        </SimpleGrid>
  </Layout>
)
export default Info