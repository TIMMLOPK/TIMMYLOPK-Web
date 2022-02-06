import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Chakra from '../components/theme-cookie'

import * as ga from '../lib/ga'

function Website({ Component, pageProps, router }) {
  const routerEvent = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url)
    }
    routerEvent.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      routerEvent.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [routerEvent.events])

  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}
export default Website
