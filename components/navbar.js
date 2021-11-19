import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon, AttachmentIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import { FaBlog } from 'react-icons/fa'
import Music from '../components/music'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
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
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
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
          <LinkItem href="/music" path={path}>
            Music
          </LinkItem>
          <LinkItem href="/info" path={path}>
            Info
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/TIMMLOPK"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Github
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
          <Music/>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                v_hover={{ bg: "gray.400" }}
                aria-label="Options"
                transition="all 0.2s"

              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/music" passHref>
                  <MenuItem as={Link}>Music</MenuItem>
                </NextLink>
                <NextLink href="/info" passHref>
                  <MenuItem as={Link}>Info</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/TIMMLOPK"
                >
                  Github
                </MenuItem>
                <NextLink href="/blog" passHref>
                  <MenuItem as={Link} icon={<AttachmentIcon />} >Blog</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
