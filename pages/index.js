import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { FiGithub, FiInstagram } from 'react-icons/fi'
import Image from 'next/image'
import {
  Paragraph,
  SplitText,
  Section,
  BioSection,
  BioYear
} from '../components/word-tool'

const Home = () => {
  return (
    <Layout>
      <Container position="relative">
        <Box as="h3" mb={6} p={3} textAlign="center">
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

        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" translate="no">
              Timmy
            </Heading>
            <p>Developer of JavaScript</p>
          </Box>
          <Box
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            display="flex"
            flexShrink={0}
            border="3px solid"
            borderRadius="50%"
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
            Hello! I am Timmy, a front-end developer. I am excited for you to
            come. We will surely have an amazing journey.
          </Paragraph>
          <Paragraph>
            Lionceu is a spaceship that attempts to fly to the moon. I am a
            software developer on this ship. We will learn more things along the
            journey. It departs from the earth every day and we are improving
            our engine so that we can fly swiftly in the universe. The ship is
            attempting to fly to the moon now and it will fly even farther in
            the future. Join us if you want to conquer the programming space.
          </Paragraph>
          <Paragraph>
            It is an adventure of software development! Let us start today.
          </Paragraph>
          <Paragraph>
            You may visit GitHub if you are interested in my ongoing and
            upcoming projects. I have developed some works like Discord bot,
            profile website and meme generator. I am glad if you appreciate
            them. Please feel free to tell me if you have advice or questions.
            My contact information is in the SOCIAL MEDIA section.
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
            <BioYear>2022-05</BioYear>
            <Box as="b" color="ActiveCaption" _hover={{ color: '#50e3c2' }}>
              <NextLink href="/blog/Release Notes" prefetch={false}>
                Website 3.10.1 【once.】
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
              <Link> → My First Website</Link>
            </NextLink>
            <h1>📷Photography</h1>
            <NextLink
              href="https://www.instagram.com/tw_wu_as_tim/"
              passHref
              prefetch={false}
            >
              <Link> → tw_wu_as_tim</Link>
            </NextLink>
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
                  leftIcon={<FiGithub />}
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
                  leftIcon={<FiInstagram />}
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
