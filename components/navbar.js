import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Stack,
  Heading,
  useDisclosure,
  useColorModeValue,
  IconButton,
  Button,
  Fade,
  SlideFade
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import { FaBlog } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Music from '../components/music'

const MeunItem = ({ href, _target, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Button
        variant="ghost"
        my={7}
        pr="25%"
        w="100%"
        target={_target}
        _hover="none"
        _active={{ bg: 'transparent' }}
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
      <Button
        p={2}
        bg={active ? '#B0E0E6' : undefined}
        color={active ? '#202023' : inactiveColor}
        borderRadius="5px"
        variant="ghost"
        pl={2}
        transition="all 0.3s"
        style={{ gap: 5, boxShadow: 'none' }}
        target={_target}
        {...props}
      >
        {children}
      </Button>
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
      bg={useColorModeValue('#ffffff80', '#20202380')}
      css={{ backdropFilter: 'blur(8px)' }}
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
        <Stack align="center" mr={5}>
          <Heading size="md" mt="1">
            <Logo />
          </Heading>
        </Stack>

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
            target="_blank"
            href="https://github.com/TIMMLOPK"
            path={path}
            display="inline-flex"
            alignItems="center"
          >
            <IoLogoGithub />
            Github
          </LinkItem>
        </Stack>

        <Box flex={2} align="right">
          <ThemeToggleButton />

          <Box ml={2} display="inline-block">
            <Music />
          </Box>

          <Box display={{ base: 'inline-flex', md: 'none' }}>
            <motion.div
              initial={{ y: [10, -10], opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              key={isOpen ? onclose : onOpen}
            >
              <IconButton
                h="40px"
                w="40px"
                variant="ghost"
                _active={{ bg: 'transparent' }}
                style={{ boxShadow: 'none' }}
                icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                onClick={isOpen ? onClose : onOpen}
              />
            </motion.div>
          </Box>
          <Fade in={isOpen} unmountOnExit={true}>
            <Stack
              h="100vh"
              display={{ base: 'block', md: 'none' }}
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
                  <MeunItem
                    href="https://github.com/TIMMLOPK"
                    onClick={onClose}
                  >
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
