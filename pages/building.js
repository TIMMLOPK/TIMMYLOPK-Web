import {
  Box,
  Text,
  SimpleGrid,
  Avatar,
  Button,
  ButtonGroup
} from '@chakra-ui/react'
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
const LinkItem = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <ButtonGroup>
        <Button {...props}>{children}</Button>
      </ButtonGroup>
    </NextLink>
  )
}
const shop = () => {
  return (
    <Box>
      <Box
        position="relative"
        h={{ base: 250, md: 400 }}
        _after={{
          content: '""',
          bgImage: 'url(/shop/bg_cover.jpg)',
          bgSize: 'cover',
          backgroundPosition: 'center',
          pos: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: -1
        }}
      >
        <Text
          fontSize="0.5%"
          zIndex={2}
          textColor="black"
          pos="absolute"
          bottom="0"
          right="0"
        >
          Illustration: Sun KAl
        </Text>
      </Box>
      <Box bg="white" height={{ base: '600px', md: '400px' }} width="738">
        <Box color="black">
          <Box textAlign="right">
            <Avatar src="shopicon.jpg" loading="lazy" size="sm" />
            <Box display="inline-flex" alignItems="center">
              <Text
                fontStyle="italic"
                fontSize="x-small"
                marginLeft={2}
                marginRight={2}
              >
                @murasaki_jpstore
              </Text>
              <Image
                src="/shop/carosell.svg"
                width="20px"
                height="20px"
                alt="carosell"
              />
              <Image src="/shop/ig.svg" width="25px" height="25px" alt="ins" />
            </Box>
          </Box>
          <Box>
            <Text>日本代購</Text>
            <Text>出團 78-82算 運費平分</Text>
            <Text>買voice 73算(少量)75算</Text>
            <Text>代購/中古 8-85算 包括但不限於：</Text>
          </Box>
          <Box paddingTop="5%" textAlign="center">
            <SimpleGrid columns={[2, null, 4]} spacingX="40px" spacingY="20px">
              {LogoMap.map(item => (
                <Box key={item.id} w="100%">
                  <Image src={item.src} width="80px" height="80px" alt="logo" />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box
        position="relative"
        h={700}
        _after={{
          content: '""',
          bgImage: 'url(/shop/bg.png)',
          bgSize: 'cover',
          pos: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.9
        }}
      >
        <Box margin="auto">
          <Text padding="15px" as="b">
            傳送門
          </Text>
          <SimpleGrid columns={[3, null, 5]} padding="15px">
            <LinkItem href="#1">代購須知</LinkItem>
            <LinkItem href="#2">付款方式</LinkItem>
            <LinkItem href="#3">交收方式</LinkItem>
            <LinkItem href="#4">運送時效</LinkItem>
            <LinkItem href="#5">風險披霹</LinkItem>
          </SimpleGrid>
        </Box>
        <Box id="1" padding="15px" margin="5px">
          <Text fontSize={25}>代購須知</Text>
          <Text fontSize={18} paddingBottom="15px">
            收費
          </Text>
          <Text>
            (商品日元價格連稅＋日本國内運費(如有))*(本店匯率)+(手續費)+(國際運費)
          </Text>
          <Text>本月匯率=0.08-0.085(視乎商品日元價格，每月匯率調整)</Text>
          <Text>商品日元價格連稅</Text>
          <Text>&lt;5000日元，手續費=$20</Text>
          <Text>5000-10000日元，手續費=$10</Text>
          <Text>&gt;10000日元，手續費=S0</Text>
          <Text>
            -商品日元價格連稅&gt;5000日元,會隨金額提供更優惠的收費匯率，歡迎查詢
          </Text>
          <Box fontSize={15} lineHeight={8} paddingTop={15}>
            <Text>-以上價格計算以未包含日本國内運費作準</Text>
            <Text>-客人需提供商品網上link/商品名稱</Text>
            <Text>-如商品需在指定時間搶購則以匯率0.1收費</Text>
            <Text>
              (本店有專業搶購經驗，10秒內售罄的商品都可搶購，不成功不收費)
            </Text>
          </Box>
          <Box
            textAlign="right"
            position="absolute"
            top="30%"
            right="0"
            display={{ base: 'none', md: 'flex' }}
          >
            <Image src="/shop/Kuzuha.png" width="150%" height="300%" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default shop
