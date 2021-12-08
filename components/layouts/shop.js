import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const Layout = ({ children, title }) => (
  
    <>
      {title && (
        <Head>
          <title>{title}</title>
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
        </Head>
      )}
      {children}

      <GridItemStyle />
    </>
)

export default Layout
