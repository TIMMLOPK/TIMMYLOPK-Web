import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const isShop = router.asPath === '/shop'
    if (isShop) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }, [router])

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
        {isVisible && <NavBar path={router.asPath} />}
        <Container maxW="container.md" pt={14}>
          {isVisible && <LazyVoxelDog />}
          {children}
          <Footer />
        </Container>
      </Box>
    </>
  )
}

export default Main
