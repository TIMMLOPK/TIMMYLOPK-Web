import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  useDisclosure,
  useColorModeValue,
  IconButton,
  Button,
  Fade,
  SlideFade
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import dynamic from 'next/dynamic'
import { FaBlog } from 'react-icons/fa'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const Music = dynamic(() => import('../components/music'))

const MeunItem = ({ href, _target, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Button
        as="a"
        variant="ghost"
        my={7}
        w="100%"
        target={_target}
        style={{ boxShadow: 'none' }}
        {...props}
      >
        {children}
      </Button>
    </NextLink>
  )
}
const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? '#B0E0E6' : undefined}
        color={active ? '#202023' : inactiveColor}
        borderRadius="5px"
        _hover="none"
        variant="ghost"
        pl={2}
        transition="all 0.3s"
        style={{ gap: 5, boxShadow: 'none' }}
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
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        <Flex align="center" mr={5} paddingRight="5px">
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
            Share
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="/blog"
            path={path}
            display="inline-flex"
            alignItems="center"
          >
            <FaBlog />
            Blog
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/TIMMLOPK"
            path={path}
            display="inline-flex"
            alignItems="center"
            isExternal={true}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
        </Stack>

        <Box flex={2} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block' }}>
            <Music />
          </Box>
          <Box display={{ base: 'inline-flex', md: 'none' }}>
            <motion.div
              whileTap={{ scale: 1.2 }}
              transition={{ duration: 0.2, type: 'spring' }}
            >
              <IconButton
                variant="ghost"
                _hover="none"
                _active={{ bg: 'transparent' }}
                style={{ boxShadow: 'none' }}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                onClick={isOpen ? onClose : onOpen}
              />
            </motion.div>
          </Box>
          <Fade in={isOpen} unmountOnExit={true}>
            <Stack
              w="100%"
              bg={useColorModeValue('#FFFFFF80', '#20202390')}
              css={{ backdropFilter: 'blur(8px)' }}
              h="100vh"
              position="fixed"
              top="14"
              left="0"
              flexDir="column"
            >
              <SlideFade in={isOpen} offsetY={150} reverse={true}>
                <Box flexDir="column" align="center">
                  <MeunItem href="/" onClick={onClose}>
                    Home
                  </MeunItem>
                  <MeunItem href="/shares" onClick={onClose}>
                    Share
                  </MeunItem>

                  <MeunItem href="/blog" onClick={onClose}>
                    {' '}
                    <FaBlog />
                    Blog
                  </MeunItem>
                  <MeunItem href="/" onClick={onClose}>
                    {' '}
                    <IoLogoGithub />
                    Github
                  </MeunItem>
                </Box>
              </SlideFade>
            </Stack>
          </Fade>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
