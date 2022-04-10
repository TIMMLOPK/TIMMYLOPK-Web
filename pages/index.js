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
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import { Paragraph, SplitText, Section,BioSection, BioYear } from '../components/word-tool'

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
          <SplitText
            initial={{ y: '100%' }}
            animate="visible"
            variants={{
              visible: i => ({
                y: 2,
                transition: {
                  delay: i * 0.1
                }
              })
            }}
          >
            Hello,Welcome to the moon!
          </SplitText>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" translate="no">
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
            Infomation
          </Heading>
          <Paragraph>
            Hello! I am Timmy, a front-end developer. I am excited about you
            come here. We will have an amazing journey.
          </Paragraph>
          <Paragraph>
            Lionceu is a spaceship that attempt to moon. I am a software
            developer of this ship. We will learn more thing from this journey.
            It departs from earth every day and we are improving our engine so
            that we can fly fast. The ship is attempting to moon now but it will
            fly farther in the future. Come up quickly if you want to conquer
            programming space.
          </Paragraph>
          <Paragraph>
            It is an adventure of software developing! Let we start today.
          </Paragraph>
          <Paragraph>
            You can go to GitHub if you are looking forward to my project. I
            have developed some works like Discord bot, profile website and meme
            generator. I am glad if you appreciate them. Also, you can tell me
            if you have advice or questions. My contact information is on{' '}
            <b>SOCIAL MEDIA</b>&apos;s section.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/project" prefetch={false} passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Project
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
            <BioYear>2022-04</BioYear>
            <Box
              as="b"
              color="ActiveCaption"
              _hover={{ color: useColorModeValue('#000000', '#FFFFFF') }}
            >
              <NextLink href="/blog/Release Notes" prefetch={false}>
                Website 3.9.9 【once.】
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
