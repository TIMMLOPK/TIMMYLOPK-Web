import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Stack,
  Heading,
  useDisclosure,
  useColorModeValue,
  Button,
  Flex
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { FiGithub } from 'react-icons/fi'
import { FaBookmark } from 'react-icons/fa'
import MeunBtn from './icons/Meunbtn'
import Music from '../components/music'
import { motion } from 'framer-motion'

const MeunItem = ({ href, _target, children, path, ...props }) => {
  const active = path === href
  return (
    <NextLink href={href} passHref prefetch={false}>
      <Button
        variant="ghost"
        my={5}
        w="100%"
        bg={active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}
        boxShadow={active ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'}
        borderRadius="14px"
        target={_target}
        _hover={{ bg: 'transparent' }}
        {...props}
      >
        {children}
      </Button>
    </NextLink>
  )
}
const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  return (
    <NextLink href={href} passHref prefetch={false}>
      <Button
        p={2}
        bg={active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}
        boxShadow={active ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'}
        variant="ghost"
        pl={2}
        style={{ gap: 5, width: '110px' }}
        target={_target}
        borderRadius="14px"
        _hover={{ bg: 'transparent' }}
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
      w="100%"
      bg={useColorModeValue('#ffffff80', '#20202380')}
      css={{ backdropFilter: 'blur(8px)' }}
      zIndex={20}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        wrap="wrap"
        align="center"
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
          <LinkItem href="/project" path={path}>
            Project
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="/blog"
            path={path}
            display="inline-flex"
            alignItems="center"
          >
            <FaBookmark />
            Blog
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/TIMMLOPK/TIMMYLOPK-Web"
            path={path}
            display="inline-flex"
            alignItems="center"
          >
            <FiGithub />
            Github
          </LinkItem>
        </Stack>

        <Box flex={2} align="right">
          <ThemeToggleButton />

          <Box ml={2} display="inline-block">
            <Music />
          </Box>
          <MeunBtn isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Box>
      </Container>
      {isOpen && (
        <Container alignItems="center">
          <Flex
            h="100vh"
            display={{ base: 'flex', md: 'none' }}
            flexDir="column"
            position="relative"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 100 }
              }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              <MeunItem href="/" onClick={onClose} path={path}>
                Home
              </MeunItem>
              <MeunItem href="/project" onClick={onClose} path={path}>
                Project
              </MeunItem>
              <MeunItem href="/blog" onClick={onClose} path={path}>
                {' '}
                <FaBookmark />
                Blog
              </MeunItem>
              <MeunItem
                href="https://github.com/TIMMLOPK/TIMMYLOPK-Web"
                onClick={onClose}
                path={path}
              >
                {' '}
                <FiGithub />
                Github
              </MeunItem>
            </motion.div>
          </Flex>
        </Container>
      )}
    </Box>
  )
}

export default Navbar
