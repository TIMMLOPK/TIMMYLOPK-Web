import React from 'react'
import { motion } from 'framer-motion'

export function SplitText({ children, ...props }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <div
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
        <motion.div
          {...props}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}
        >
          {word + (i !== words.length - 0 ? '\u00A0' : '')}
        </motion.div>
      </div>
    )
  })
}
