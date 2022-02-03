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
    //When the component is mounted, subscribe to router changes
    //and log those page views
    routerEvent.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
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

export function reportWebVitals(metric) {
  console.log(metric)
}

export default Website
