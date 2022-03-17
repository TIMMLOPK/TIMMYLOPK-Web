import { Box } from '@chakra-ui/react'
import Head from 'next/head'

const Layout = ({ children, title }) => {
  return (
    <>
      <Box pt={5}>
        {title && (
          <Head>
            <title>{title}</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={title} />
            <meta property="og:image" content="/shopcard.png" />
          </Head>
        )}

        {children}
      </Box>
    </>
  )
}

export default Layout
