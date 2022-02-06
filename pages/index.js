import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha', 'whiteAlpha.200')}
          backdropBlur="8px"
        >
          <Box>Hello,Welcome to moon</Box>
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
              height="100px"
              display="inline-block"
              src="/images/icon.webp"
              alt='Timmy'
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Info
          </Heading>
          <Paragraph>
            <p>Hi, I am @TIMMLOPK.I am astronaut of JavaScript.</p>
            <p>👀 I am interested in Photography, Website developing</p>
            <p>🌱 I am currently learning JavaScript 💭</p>
            <Paragraph>
              I am a JavaScript developer from Hong Kong.I am studying in
              secondary school. I am not study with the programm subject so I
              learn by myself.I think this is common of developer. Beside
              JavaScript,I am interested in Rust but it is not yet start.
            </Paragraph>
            <Paragraph>
              I am currently learning JavaScript and Rust.I also like
              Photography despite not professional.
            </Paragraph>
            <Paragraph>
              once. is my website for sharing about programming.Let we learn
              together!
            </Paragraph>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/shares" prefetch={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Share
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
            <BioYear>2022-02</BioYear>
            <Box as="b">Website 3.9 【once.】</Box>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My Experience
          </Heading>
          <Paragraph>
            <h1>💻Developing Works </h1>
            <NextLink
              href="https://github.com/TIMMLOPK/once"
              passHref
              prefetch={false}
            >
              <Link>My First Website</Link>
            </NextLink>
            <h1>📷Photography </h1>
            <NextLink
              href="https://www.instagram.com/tw_wu_as_tim/"
              passHref
              prefetch={false}
            >
              <Link>tw_wu_as_tim</Link>
            </NextLink>
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
              <Link
                href="https://www.instagram.com/tw_wu_as_tim/"
                target="_blank"
              >
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

export { getServerSideProps } from '../components/theme-cookie'

export default Home
