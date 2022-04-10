import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/theme-cookie'

function Website({ Component, pageProps, router }) {
  return (
    <>
      <Chakra cookies={pageProps.cookies}>
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Chakra>
    </>
  )
}
export default Website
