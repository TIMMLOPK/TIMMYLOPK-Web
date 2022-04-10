import { motion } from 'framer-motion'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import VoxelDogLoader from '../voxel-dog-loader'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Layout = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.6, type: 'spring' }}
      position="relative"
    >
      <>
        {title && (
          <Head>
            <title>{title} - once</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
          </Head>
        )}
        <LazyVoxelDog />
        {children}
      </>
    </motion.article>
  )
}

export default Layout
