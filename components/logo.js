import NextLink from 'next/link'
import Image from 'next/image'
import { Link, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

import logoImg from '../public/images/avatar.png'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
`

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <LogoBox>
        <Image src={logoImg} width={20} height={20} alt="logo" priority />
        <Link
          color={useColorModeValue('black', 'white')}
          textDecoration={'none'}
        >
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
          >
            once.
          </Text>
        </Link>
      </LogoBox>
    </NextLink>
  )
}

export default Logo
