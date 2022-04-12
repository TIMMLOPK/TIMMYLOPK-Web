import { Box, Text, SimpleGrid, Avatar } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

const LogoMap = [
  {
    id: 1,
    src: '/shop/zozotown.svg'
  },
  {
    id: 2,
    src: '/shop/booth.svg'
  },
  {
    id: 3,
    src: '/shop/amazon.svg'
  },
  {
    id: 4,
    src: '/shop/mercari.svg'
  },
  {
    id: 5,
    src: '/shop/animate.svg'
  },
  {
    id: 6,
    src: '/shop/nij.svg'
  },
  {
    id: 7,
    src: '/shop/rakuten-2.svg'
  },
  {
    id: 8,
    src: '/shop/melonbooks.svg'
  }
]

const shop = () => {
  return (
    <Box>
      <Box
        position='relative'
        h={400}
        _after={{
          content: '""',
          bgImage:
            "url(/shop/bg_cover.jpg)",
          bgSize: "cover",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: -1
        }}>
        <Text fontSize='0.5px' zIndex={2} textColor='black' pos='absolute' bottom='0' right='0'>
          Illustration: Sun KAl
        </Text>
      </Box>
      <Box bg="white" height={{ base: '600px', md: '400px' }} width="738">
        <Box color="black" >
          <Box textAlign='right'>
            <Avatar src="shopicon.jpg" loading="lazy" size='sm' />
            <Box display='inline-flex' alignItems='center'>
              <Text fontStyle='italic' fontSize='x-small' marginLeft={2} marginRight={2}>@murasaki_jpstore</Text>
              <Image src='/shop/carosell.svg' width='20px' height='20px' alt='carosell'/>
              <Image src='/shop/ig.svg' width='25px' height='25px' alt='ins'/>
            </Box>
          </Box>
          <Box>
            <Text>日本代購</Text>
            <Text>出團 78-82算 運費平分</Text>
            <Text>買voice 73算(少量)75算</Text>
            <Text>代購/中古 8-85算 包括但不限於：</Text>
          </Box>
          <Box paddingTop="5%" textAlign='center'>
            <SimpleGrid columns={[2, null, 4]} spacingX="40px" spacingY="20px">
              {LogoMap.map(item => (
                <Box key={item.id} w="100%">
                  <Image src={item.src} width="100px" height="100px" alt='logo' />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box
        position='relative'
        h={400}
        _after={{
          content: '""',
          bgImage:
            "url(/shop/bg.png)",
          bgSize: "cover",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: -1
        }}>
        <Box margin='auto'>
          <Text padding='15px'>傳送門</Text>
          <SimpleGrid columns={[3, null, 5]} padding='15px'>
            <NextLink href='#1'>代購須知</NextLink>
            <NextLink href='#2'>付款方式</NextLink>
            <NextLink href='#3'>交收方式</NextLink>
            <NextLink href='#4'>運送時效</NextLink>
            <NextLink href='#5'>風險披霹</NextLink>
          </SimpleGrid>
        </Box>
        <Box id='1' padding='15px'>
          <Text as='h1'>代購須知</Text>
        </Box>
      </Box>
    </Box >
  )
}

export default shop
