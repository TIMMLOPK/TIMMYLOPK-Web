import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import { LazyMotion, domMax } from 'framer-motion'
import theme from '../lib/theme'

function Website({ Component, pageProps, router }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout router={router}>
          <LazyMotion features={domMax}>
            <AnimatePresence exitBeforeEnter initial>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </LazyMotion>
        </Layout>
      </ChakraProvider>
    </>
  )
}
export default Website
