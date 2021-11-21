import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import {IoMdBuild} from 'react-icons/io'

const Info = () => (
  <Layout title="Info">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Page Building 
      </Heading>
<IoMdBuild/>
    </Container>
  </Layout>
)
export default Info