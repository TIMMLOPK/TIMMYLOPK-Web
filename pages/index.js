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
      <Container position="relative">
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
        >
          <Box fontWeight="medium">Hello,Welcome to moon</Box>
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
              src="/images/icon.webp"
              alt="Timmy"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Info
          </Heading>
          <Paragraph>
            <p>Hi, I am @TIMMLOPK,an astronaut of programmer.</p>
            <p>👀 I am interested in Photography, Website developing</p>
            <p>🌱 I am currently learning JavaScript 💭</p>
            <Paragraph>
              I am a JavaScript developer from Hong Kong.I am studying in
              secondary school. I am not study with the programm subject so I
              learn by myself.I think this is common of developer. Beside JS,I
              am learning Rustlang too.
            </Paragraph>
            <Paragraph>
              I am currently learning JavaScript and Rust.I also like
              Photography despite not professional.
            </Paragraph>
            <Paragraph>
              once. is my website for sharing about programming.Let we learn together!
            </Paragraph>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/shares" prefetch={false} passHref>
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
            <Box
              as="b"
              color="ActiveCaption"
              _hover={{ color: useColorModeValue('#000000', '#FFFFFF') }}
            >
              <NextLink href="/blog/Release Notes" prefetch={false}>
                Website 3.9.4 【once.】
              </NextLink>
              <Box
                backgroundColor="#50e3c2"
                w="12px"
                h="12px"
                display="inline-block"
                borderRadius="50%"
                boxShadow="0px 1px 10px 2px rgb(80 227 194), 0 1px 10px -5px rgb(80 227 194)"
              />
            </Box>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My Experience
          </Heading>
          <Paragraph>
            <h1>💻Developing Works</h1>
            <NextLink
              href="https://github.com/TIMMLOPK/once"
              passHref
              prefetch={false}
            >
              <Link>My First Website</Link>
            </NextLink>
            <h1>📷Photography</h1>
            <NextLink
              href="https://www.instagram.com/tw_wu_as_tim/"
              passHref
              prefetch={false}
            >
              <Link>tw_wu_as_tim</Link>
            </NextLink>
            <h1>🔭Explore More...</h1>
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
                  leftIcon={<IoLogoGithub />}
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
                  leftIcon={<IoLogoInstagram />}
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
