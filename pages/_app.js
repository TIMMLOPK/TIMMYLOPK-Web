import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Chakra from '../components/theme-cookie'
import Script from 'next/script'

import * as gtag from '../lib/ga'

function Website({ Component, pageProps, router }) {
  const routerevent = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    routerevent.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      routerevent.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [routerevent.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-D0R4YZSHHS"
      />
      <Script
        id="my-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D0R4YZSHHS', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <Chakra cookies={pageProps.cookies}>
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Chakra>
    </>
  )
}
export default Website
