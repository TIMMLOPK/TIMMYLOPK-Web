import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import dynamic from 'next/dynamic'
import { FaBlog } from 'react-icons/fa'
import { useState } from 'react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const Music = dynamic(() => import('../components/music'))

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? '#B0E0E6' : undefined}
        color={active ? '#202023' : inactiveColor}
        _hover="none"
        boxShadow="none"
        variant="ghost"
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const [display, changeDisplay] = useState('none')
  const [hide, setHide] = useState({ base: 'inline-block', md: 'none' })
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="x1">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/shares" path={path}>
            Sharing
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="/blog"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <FaBlog />
            blog
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/TIMMLOPK"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            isExternal={true}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block' }}>
            <Music />
          </Box>

          <Box flex={1} display={{ base: 'inline-block' }}>
            <Box
              as="button"
              position="relative"
              margin={2}
              onClick={() => {
                changeDisplay('none')
                setHide({ base: 'inline-block', md: 'none' })
              }}
              display={display}
            >
              <motion.div
                animate={{ opacity: 1, rotate: -360 }}
                transition={{ type: 'spring' }}
              >
                <CloseIcon />
              </motion.div>
            </Box>
          </Box>

          <Box
            as="button"
            position="relative"
            onClick={() => {
              changeDisplay('block')
              setHide('none')
            }}
            display={hide}
            margin={2}
          >
            <motion.div whileTap={{ rotate: 360 }}>
              <HamburgerIcon />
            </motion.div>
          </Box>

          <Flex
            w="100%"
            display={display}
            bg={useColorModeValue('#ffffff95', '#20202390')}
            css={{ backdropFilter: 'blur(5px)' }}
            zIndex={20}
            h="100vh"
            position="fixed"
            left="0"
            overflowY="auto"
            flexDir="column"
          >
            <Box flexDir="column" align="center">
              <NextLink href="/" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Home"
                  my={5}
                  w="100%"
                  onClick={() => {
                    changeDisplay('none')
                    setHide({ base: 'inline-block', md: 'none' })
                  }}
                >
                  Home
                </Button>
              </NextLink>
              <NextLink href="/shares" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="About"
                  my={5}
                  w="100%"
                  onClick={() => {
                    changeDisplay('none')
                    setHide({ base: 'inline-block', md: 'none' })
                  }}
                >
                  Sharing
                </Button>
              </NextLink>

              <NextLink href="/blog" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Contact"
                  my={5}
                  w="100%"
                  onClick={() => {
                    changeDisplay('none')
                    setHide({ base: 'inline-block', md: 'none' })
                  }}
                >
                  <FaBlog />
                  Blog
                </Button>
              </NextLink>
              <NextLink
                href="https://github.com/TIMMLOPK"
                passHref
                prefetch={false}
              >
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Contact"
                  my={5}
                  w="100%"
                  onClick={() => {
                    changeDisplay('none')
                    setHide({ base: 'inline-block', md: 'none' })
                  }}
                >
                  <IoLogoGithub />
                  Github
                </Button>
              </NextLink>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
