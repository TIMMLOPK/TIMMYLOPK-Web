import { motion } from 'framer-motion'
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

const Layout = ({ children }) => {
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
        <LazyVoxelDog />
        {children}
      </>
    </motion.article>
  )
}

export default Layout
