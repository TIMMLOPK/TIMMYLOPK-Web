import { Heading, Avatar, Box } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { motion } from 'framer-motion';
import { Link } from '@chakra-ui/react';
import dynamic from 'next/dynamic'
import Layout from '../components/layouts/shop';

const Bottombar = dynamic(() => import('../components/bottombar'), { ssr: false })


const Shop = () => (


  <>

    <Layout title='@murasaki_jpstore'>
      <Heading as="h3" fontSize={20} mb={4}>
        <Link href="https://www.instagram.com/murasaki_jpstore/" target='_blank'>
          <Link backgroundColor='#EBF8FF' color='#000000' borderRadius='5px'>@murasaki_jpstore</Link>
        </Link>
      </Heading>
      <motion.div
        animate={{ scale: [0,1] }}
        transition={{
          delay: 1,
          x: { type: "spring", stiffness: 500 }
        }}

      >
        <Avatar
          src='shopicaon.jpg' />
      </motion.div>
      <Box paddingTop='20px'>
        <Bottombar />
      </Box>
      <h3>Last updated : Less Than An Hour</h3>
      <Heading as='h1'>主力出團 8算 日本運費平分 </Heading>
      <Box color='#626567' as='b' fontSize='23px'>
        代購/中古 82算  Mercari, 樂天, Rukuma, ZOZOTOWN, booth 等
      </Box>
      <Box fontSize='19px'>
      <p>&lt;5000日元 手續費30港幣</p>
      <p>	&gt;30000日元 提供匯率優惠</p>
      </Box>
      <Paragraph>
        國際運一律走空運，收到貨後通常一週內到港，郵寄風險買家承擔
        匯率隨時調整而不會事先通知</Paragraph><Box as='b'>請注意
        <Paragraph>
        落單後請勿作出更改，例如取消、更改訂單，違者blacklist
      </Paragraph>
      <Paragraph>
        收:AlipayHK / FPS /Payme
      訊息欄請寫下ig account 名,入數後請send screenshot 給我
      </Paragraph>
      </Box>
      <Paragraph>
        面交:
        星期一至五
        <li>3:30pm 香港大學站</li>
        <li>3:55pm 中環/金鐘</li>
        <li>4:05pm 油麻地/旺角/太子</li>
        <li>4:20 九龍塘</li>
        <li>4:30 鑽石山</li>
        <Paragraph>
          星期日
          <li>1-6pm 油麻地/旺角/太子</li>
        </Paragraph>
      </Paragraph>
      <p>順豐到付</p>

    </Layout>
  </>
)

export default Shop