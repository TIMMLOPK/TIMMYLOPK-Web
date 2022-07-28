import {
  Box,
  Text,
  SimpleGrid,
  Avatar,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import dynamic from 'next/dynamic'
import { AiOutlineNotification } from 'react-icons/ai'
import { motion } from 'framer-motion'

import Kuzuha from '../public/shop/Kuzuha.png'
import Kanae from '../public/shop/Kanae.png'
import Sec_1 from '../public/shop/sec_1.png'
import Sec_2 from '../public/shop/sec_2.png'

const Bottombar = dynamic(() => import('../components/menu'), {
  ssr: false
})

const Shop = ({ data }) => {
  return (
    <>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        alignItems="center"
        justifyContent="center"
        display={data.display_banner ? 'flex' : 'none'}
        mb={data.display_banner ? '25px' : '0'}
        borderRadius="14px"
        height="50px"
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <AiOutlineNotification />
          <motion.span
            initial={{ x: -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              marginLeft: 5
            }}
          >
            <Text fontSize="1rem">{data.content}</Text>
          </motion.span>
        </Box>
      </Box>

      <Bottombar inview />
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
            zIndex: -5
          }}
        >
          <p
            style={{
              position: 'absolute',
              bottom: 6,
              right: 0,
              color: '#BEBEBE',
              fontSize: '0.5px'
            }}
          >
            Illustration: Sun KAl
          </p>
        </Box>
        <Box
          bg="white"
          height={{ base: '580px', md: '400px' }}
          width="738"
          mt={-1}
        >
          <Box color="black">
            <Box textAlign="right" mr={3}>
              <Avatar src="shopicon.jpg" loading="lazy" size="sm" />
              <Box display="inline-flex" alignItems="center">
                <Text
                  fontStyle="italic"
                  fontSize="0.8rem"
                  fontWeight={600}
                  marginLeft={2}
                  marginRight={2}
                >
                  @murasaki_jpstore
                </Text>
                <NextLink
                  href="https://www.carousell.com.hk/u/murasaki_jpstore/"
                  passHref
                >
                  <Image
                    src="/shop/carosell.svg"
                    width="20px"
                    height="20px"
                    alt="carosell"
                  />
                </NextLink>
                <NextLink
                  href="https://www.instagram.com/murasaki_jpstore/"
                  passHref
                >
                  <Image
                    src="/shop/ig.svg"
                    width="25px"
                    height="25px"
                    alt="instagram"
                  />
                </NextLink>
              </Box>
              <Box fontSize={11}>
                <Text>#上線≠覆DM</Text>
                <Text>#嚴禁棄單</Text>
              </Box>
            </Box>
            <Box ml={5}>
              <Box fontSize={16} lineHeight={1.5} fontFamily="sans-serif">
                <Text>日本代購🤍💙</Text>
                <Text>{data.index_area_line1}</Text>
                <Text>{data.index_area_line2}</Text>
                <Text>{data.index_area_line3}</Text>
              </Box>
            </Box>
            <Box paddingTop="5%" textAlign="center">
              <SimpleGrid
                columns={[2, null, 4]}
                spacingX="40px"
                spacingY="20px"
              >
                {LogoMap.map(item => (
                  <Box key={item.id} w="100%">
                    <Image
                      src={item.src}
                      width="80px"
                      height="80px"
                      alt="logo"
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
        <Box
          position="relative"
          h={{ base: '2150px', md: '2050px' }}
          _after={{
            content: '""',
            bgImage: 'url(/shop/bg.png)',
            bgSize: 'cover',
            pos: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: -5,
            opacity: 0.9
          }}
        >
          <Box id="1" padding="15px" marginTop="-5px">
            <Text fontSize={27} pb={2}>
              代購須知
            </Text>
            <Text fontSize={20} fontWeight={500} pb={2}>
              收費
            </Text>
            <Text>
              (商品日元價格連稅＋日本國内運費(如有))*(本店匯率)+(手續費)+(國際運費)
            </Text>
            <Text>
              本月匯率={data.rate_monthly}(視乎商品日元價格，每月匯率調整)
            </Text>
            <Text mt={5}>商品日元價格連稅</Text>
            <Text>&lt;5000日元，手續費=${data.fee_1}</Text>
            <Text>5000-10000日元，手續費=${data.fee_2}</Text>
            <Text>&gt;10000日元，手續費=${data.fee_3}</Text>
            <Text mt={2}>
              -商品日元價格連稅&gt;5000日元,會隨金額提供更優惠的收費匯率，歡迎查詢
            </Text>
            <Box fontSize={15} lineHeight={2} mt={18}>
              <p>-以上價格計算以未包含日本國内運費作準</p>
              <p>-客人需提供商品網上link/商品名稱</p>
              <p>-如商品需在指定時間搶購則以匯率0.1收費</p>
              <p>
                (本店有專業搶購經驗，15秒內售罄的商品都可搶購，不成功不收費)
              </p>
            </Box>
            <Box
              position="absolute"
              top="100"
              right="0"
              display={{ base: 'none', md: 'block' }}
              width="300px"
              height="400px"
              zIndex={-1}
            >
              <Image src={Kuzuha} alt="Kuzuha" />
            </Box>
          </Box>
          <Box id="2" padding="15px" marginTop="15%">
            <Text fontSize={27} textAlign="right" pb={2}>
              付款方式
            </Text>
            <Box>
              <Stack
                direction="row"
                spacing="24px"
                justify="right"
                display="flex"
                align="center"
              >
                <Box>
                  <Image
                    src="/shop/AlipayHK.png"
                    width="200%"
                    height="125%"
                    alt="AlipayHK"
                  />
                </Box>
                <Box>
                  <Image
                    src="/shop/payme.svg"
                    width="100%"
                    alt="payme"
                    height="100%"
                  />
                </Box>
                <Box>
                  <Image
                    src="/shop/fps.svg"
                    width="80%"
                    alt="fps"
                    height="80%"
                  />
                </Box>
              </Stack>
            </Box>
            <Text textAlign="right" fontWeight="bold">
              -過數後請傳送永久保存截圖
            </Text>
          </Box>
          <Box id="3" padding="18px" margin="5px">
            <Box display="flex">
              <Box display={{ base: 'none', md: 'block' }}>
                <Image src={Kanae} width="200%" height="300%" alt="Kanae" />
              </Box>
              <Box lineHeight={1.8}>
                <Text fontSize={27} pb={2}>
                  交收方式
                </Text>
                <Text>1.面交</Text>
                <Text>-請與店主約時間</Text>
                <Text>-主要在太子,旺角,油麻地,尖沙咀站</Text>
                <Text>-客服中心位置(閘內/閘外皆可)</Text>
                <Text>
                  ⚠
                  如因個人問題無法交收，最遲於1hr前通知，否則下次交收可能有罰款
                </Text>
                <Text>2.順豐到付</Text>
                <Text>-請提供名字,電話,地址/順豐網點代碼</Text>
                <Text>
                  -順豐網點目前只提供自寄自取, 不能上門送貨,詳情請參考:
                </Text>
                <Text>順境疫境 與您同行｜網點自寄自取 取件零接觸</Text>
              </Box>
            </Box>
          </Box>
          <Box id="4" padding="15px" margin="5px">
            <Box display="inline-flex">
              <Box lineHeight={2}>
                <Text mt={20} fontSize={27} pb={2}>
                  運送時效
                </Text>
                <Text>-貨物運到日本倉後,於一至兩個禮拜內空運到港</Text>
                <Text>-部分網站規管較嚴, 可能要先寄日本地址再轉運日本倉,</Text>
                <Text>運到日本地址後,於兩至三個禮拜內到港</Text>
                <Text>
                  -航空禁運品如香水也可以代購,
                  只可以行海運,需時21天或以上(試過一個多月)
                </Text>
                <Text>
                  -上述時效為最近抵港需時數據, 抵港時間可能因運輸等情況而延遲
                </Text>
              </Box>
              <Box
                display={{ base: 'none', md: 'block' }}
                justifyContent="right"
                mt={20}
              >
                <Image src={Sec_1} width="400%" height="400%" alt="Kuzuha" />
              </Box>
            </Box>
          </Box>
          <Box id="5" padding="15px" margin="5px">
            <Box
              display={{ base: 'none', md: 'block' }}
              pos="absolute"
              bottom="7.5rem"
              zIndex={-1}
            >
              <Image src={Sec_2} width="450%" height="300%" alt="Kuzuha" />
            </Box>
            <Box textAlign="right" lineHeight={2}>
              <Text fontSize={27} pb={2}>
                風險披露
              </Text>
              <Text>-所有運輸風險(如日運,國際空運,順豐)</Text>
              <Text>均由顧客承擔</Text>
              <Text>-如貨物在運送途中有任何損壞</Text>
              <Text>本店恕不負責</Text>
              <Text>-易碎品本店會盡力妥善包裝</Text>
              <Text>亦可應顧客要求重新包裝</Text>
              <Text>-香水等空運禁運品雖可海運 (由日本出口)</Text>
              <Text>但仍有一定風險會被香港海關扣留</Text>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignContent="center"
            mt={2}
          >
            <Box>最後祝各位:購物,追星/追V愉快~</Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

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

export async function getStaticProps() {
  const res = await fetch('https://database-lionceu.herokuapp.com/api/shops')
  let data = await res.json()
  return {
    props: {
      data: data.data[0].attributes
    },
    revalidate: 10
  }
}

export default Shop
