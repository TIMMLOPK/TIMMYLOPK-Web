import { Heading, Avatar, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Layout from '../components/layouts/shop'
import { SplitText, Paragraph } from '../components/word-tool'
import { timeDiff } from '../utils/timeDiff'

const Bottombar = dynamic(() => import('../components/menu'), { ssr: false })

const Shop = () => {
  return (
    <>
      <Layout title="@murasaki_jpstore">
        <Heading as="h3" fontSize={20} mb={4}>
          <Link
            href="https://www.instagram.com/murasaki_jpstore/"
            target="_blank"
          >
            <Link
              backgroundColor="#EBF8FF"
              color="#000"
              borderRadius="5px"
              position="relative"
            >
              @murasaki_jpstore
            </Link>
          </Link>
        </Heading>
        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{ x: { type: 'spring', stiffness: 500 } }}
        >
          <Avatar src="shopicon.jpg" loading="lazy" />
        </motion.div>
        <Box>
          <Bottombar />
        </Box>
        <Box as="h2" padding={2}>
          {timeDiff('2022/03/16 14:44')}
        </Box>
        <Heading as="h1">主力出團 8算 日本運費平分</Heading>
        <Box color="#626567" fontSize="28px">
          <SplitText
            initial={{ y: '100%' }}
            animate="visible"
            variants={{
              visible: i => ({
                y: 2,
                transition: {
                  delay: i * 0.1
                }
              })
            }}
          >
            代購/中古 82算 Mercari, 樂天, Rukuma, ZOZOTOWN, booth 等
          </SplitText>
        </Box>
        <Box paddingBottom="5" fontSize="18px" lineHeight={10}>
          <Box>
            <p>&lt;5000日元 手續費30港幣</p>
            <p> &gt;30000日元 提供匯率優惠</p>
          </Box>
          <Paragraph>
            國際運一律走空運，收到貨後通常一週內到港，郵寄風險買家承擔
            匯率隨時調整而不會事先通知
          </Paragraph>
        </Box>
        <motion.div
          initial="hidden"
          whileInView="enter"
          variants={{
            hidden: { opacity: 0, x: 20, y: 20 },
            enter: { opacity: 1, x: [100, 0], y: 0 }
          }}
        >
          <Box as="b">
            請注意
            <Paragraph>
              落單後請勿作出更改，例如取消、更改訂單，違者blacklist
            </Paragraph>
            <Paragraph>
              收:AlipayHK / FPS /Payme 訊息欄請寫下ig account 名,入數後請send
              screenshot 給我
            </Paragraph>
          </Box>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="enter"
          variants={{
            hidden: { opacity: 0, x: 20, y: 20 },
            enter: { opacity: 1, x: [-100, 0], y: 0 }
          }}
        >
          <Paragraph>
            面交: 星期一至五
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
          <Box margin="4" display="flex" alignItems="center">
            <Avatar
              src="sf.png"
              loading="lazy"
              bg="white"
              height="10"
              width="20"
            />
            <p style={{ paddingLeft: '5px' }}>順豐到付</p>
          </Box>
        </motion.div>
      </Layout>
    </>
  )
}

export default Shop
