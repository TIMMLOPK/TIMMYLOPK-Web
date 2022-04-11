import { Box, Text, SimpleGrid, Avatar} from '@chakra-ui/react'
import Image from 'next/image'

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
      <Image src="/shop/bg_cover.jpg" width="738" height="390" alt='cover Image'/>
      <Box bg="white" height="100vh" width="738">
        <Box color="black" marginTop="-1.5">
          <SimpleGrid textAlign='right'>
            <Text fontSize='xs'>
              Illustration: Sun KAl
            </Text>
            <Box paddingLeft='70%'>
              <Avatar src="shopicon.jpg" loading="lazy" size='sm' />
              <Text display='inline-block' alignItems='center' margin='auto' fontSize='5px'>@murasaki_jpstore</Text>
            </Box>
          </SimpleGrid>
          <Text>日本代購</Text>
          <Text>出團 78-82算 運費平分</Text>
          <Text>買voice 73算(少量)75算</Text>
          <Text>代購/中古 8-85算 包括但不限於：</Text>
          <Box paddingLeft="60px" paddingTop="5%">
            <SimpleGrid columns={[2, null, 4]} spacingX="40px" spacingY="20px">
              {LogoMap.map(item => (
                <Box key={item.id} w="100%">
                  <Image src={item.src} width="100px" height="100px" alt='logo'/>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box >
    </Box >
  )
}

export default shop
