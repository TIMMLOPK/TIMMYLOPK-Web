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
  IoLogoGithub
} from 'react-icons/io5'

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Box>
            Hello,Welcome Back ~
          </Box>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Timmy
            </Heading>
            <p>Developer of JavaScript</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              width="100px"
              height="auto"
              display="inline-block"
              borderRadius="full"
              src="/images/icon.webp"
              alt="Not support format" />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Info
          </Heading>
          <Paragraph>
            <p>Hi, I am @TIMMLOPK</p>
            <p>👀 I am interested in Photography, Website developing</p>
            <p>🌱 I am currently learning JavaScript 💭</p>
            <Paragraph>
              Timmy is a JavaScript Developer from Hong Kong.I also good at differnt kind of technology such as software and hardware.</Paragraph>
            <Paragraph>
              I am currently learning JavaScript and else language.I am instered in photography so I have ig account for this
              topic.
            </Paragraph>
            <Paragraph>📱Lionceu is my own website for sharing something about programming.Let we learn together!</Paragraph>
            <Paragraph>📫 You can reach me on IG</Paragraph>
            <Link href="https://www.instagram.com/once_wu/" target='_blank'>
              <Link>@once_wu</Link>
            </Link>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Sharing
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Website Version 🚄
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
            <BioYear>2021-11</BioYear>
            Website 3.4 【T·once】
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My Experience
          </Heading>
          <Paragraph>
            <h1>💻Developing Works {' '}</h1>
            <Link href="https://github.com/TIMMLOPK/once" target="_blank">
              My First Website
            </Link>
            <h1>📷Photography{' '}</h1>
            <Link href="" target="_blank">
              tw_wu_as_tim
            </Link>
            <h1>🔭And More...</h1>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            SOICAL MEDIA
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
          </List>

        </Section>
      </Container>
    </Layout>
  )
}

export default Home
