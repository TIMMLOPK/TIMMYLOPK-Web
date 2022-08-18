import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
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
            Hey, I&apos;m Timmy. ❣️
          </SplitText>
        </Box>

        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <Heading variant="page-title" translate="no">
              Timmy
            </Heading>
            <Box mt={3} fontSize="14px" mb={5}>
              Developer / Student
            </Box>
          </Box>
          <Box
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            display="flex"
            flexShrink={0}
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
            Introduction
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
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My Experience
          </Heading>
          <h1>💻 Developing</h1>
          <Paragraph>
            <List>
              <ListItem>🚀JavaScript</ListItem>
              <ListItem>🚀Rust</ListItem>
              <ListItem>🚀Python</ListItem>
              <ListItem>🪄React</ListItem>
              <ListItem>🪄Next.js</ListItem>
            </List>
            <Box m={2}>
              ↪ More information in{' '}
              <NextLink href="/project" prefetch={false}>
                Project
              </NextLink>
            </Box>
          </Paragraph>
          <h1>📷 Photography</h1>
          <Paragraph>
            <NextLink
              href="https://www.instagram.com/tw_wu_as_tim/"
              passHref
              prefetch={false}
            >
              <Text textColor="blue.500" cursor="pointer">
                → tw_wu_as_tim
              </Text>
            </NextLink>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Milestones
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
            <BioYear>2022-08</BioYear>
            <Box as="b">
              <NextLink href="/blog/Release Notes" prefetch={false}>
                Website 3.10.5 【once.】
              </NextLink>
              <Box
                backgroundColor="#50e3c2"
                w="8px"
                h="8px"
                display="inline-block"
                borderRadius="50%"
                boxShadow="0px 1px 10px 2px rgb(80 227 194), 0 1px 10px -5px rgb(80 227 194)"
              />
            </Box>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            SOICAL MEDIA
          </Heading>
          <List>
            <ListItem>
              <NextLink href="https://github.com/TIMMLOPK/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<FiGithub />}
                >
                  @TIMMLOPK
                </Button>
              </NextLink>
            </ListItem>

            <ListItem>
              <NextLink
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
              </NextLink>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
