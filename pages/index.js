import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello,  Welcome To The Site~
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Timmy
          </Heading>
          <p>Developer (Website/....)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/icon.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Info
        </Heading>
        <Paragraph>
          Info of me still writing Coming Soon :) Some Project on{' '}
          <Link href="https://github.com/TIMMLOPK" target='_blank'>
            <Link>GitHub</Link>
          </Link>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              More
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Website Road 🚄
        </Heading>
        <BioSection>
          <BioYear>2021-09</BioYear>
          Website 1.0 【once.】
        </BioSection>
        <BioSection>
          <BioYear>2021-09</BioYear>
          Website 2.1 【once.】
        </BioSection>
        <BioSection>
          <BioYear>2021-10</BioYear>
          Website 2.4 【once.】
        </BioSection>
        <BioSection>
          <BioYear>2021-11~</BioYear>
          Website 3.0 【T·once】
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Experience
        </Heading>
        <Paragraph>
          Develop {' '}
          <Link href="https://github.com/TIMMLOPK/once" target="_blank">
            MyFirstWebsite 
          </Link>
          |  Photography{' '}
          <Link href="" target="_blank">
            tw_wu_as_tim
          </Link>
          | And more...
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/TIMMLOPK/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @TIMMLOPK
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://www.instagram.com/tw_wu_as_tim/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @tw_wu_as_tim
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discordapp.com/users/717937234304696380" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="\works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Blog
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
