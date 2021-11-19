import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'


const Info = () => (
  <Layout title="Info">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
         About Me ~
      </Heading>
    </Container>
  </Layout>
)
export default Info