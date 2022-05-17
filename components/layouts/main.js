import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Footer from '../footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Main = ({ children, router }) => {
  const page = useRouter().pathname

  const isShop = page === '/shop'

  const [isVisible, setIsVisible] = useState('flex')

  useEffect(() => {
    if (isShop) {
      setIsVisible('none')
    } else {
      setIsVisible('flex')
    }
  }, [isShop])

  return (
    <>
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="HomePage@once" />
          <meta name="author" content="Timmy" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta property="og:site_name" content="HomePage@once" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/card.png" />
          <title>once.</title>
        </Head>
        <div style={{ display: isVisible }}>
          <NavBar path={router.asPath} />
        </div>
        <Container maxW="container.md" pt={14}>
          {children}
          <Footer />
          <div className="box">
            <div className="circle-box">
              <div className="circle-1" />
            </div>
          </div>
          <div className="circle-box-2">
            <div className="circle-2" />
          </div>
        </Container>
      </Box>
      <style jsx>{`
        .box {
          position: absolute;
          top: 0 !important;
          left: 0;
          right: 0;
          z-index: -999;
        }
        .circle-box {
          position: absolute;
          top: 20;
          overflow: visible;
          opacity: ${useColorModeValue('0.5', '0.2')};
          left: 7rem;
        }
        .circle-1 {
          mix-blend-mode: multiply;
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 40rem;
          background: radial-gradient(
            closest-side,
            rgba(45, 212, 191, 1),
            rgba(233, 168, 2, 0)
          );
          animation: traverse-up-right 10s ease-in-out infinite alternate;
          z-index: -1;
        }
        .circle-2 {
          mix-blend-mode: multiply;
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 40rem;
          background: radial-gradient(
            closest-side,
            rgba(45, 108, 190, 1),
            rgba(230, 160, 2, 0)
          );
          animation: traverse-up-left 10s ease-in-out infinite alternate;
          z-index: -1;
        }

        .circle-box-2 {
          position: absolute;
          top: 7rem;
          overflow: visible;
          opacity: ${useColorModeValue('0.5', '0.2')};
          left: 0;
        }
        @keyframes traverse-up-right {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translateX(-20%);
          }
        }
        @keyframes traverse-up-left {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translateY(-40%);
          }
        }
      `}</style>
    </>
  )
}

export default Main
