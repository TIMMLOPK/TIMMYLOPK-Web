import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

function Website({ Component, pageProps, router }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  )
}
export default Website
