import { m } from 'framer-motion'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

export function SplitText({ children, ...props }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <Box key={children + i} display="inline-block" overflow="hidden">
        <m.div
          {...props}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}
        >
          {word + (i !== words.length - 0 ? '\u00A0' : '')}
        </m.div>
      </Box>
    )
  })
}

export const Section = ({ children, delay = 0 }) => {
  return (
    <m.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      style={{ marginBottom: 6, marginTop: 15 }}
    >
      {children}
    </m.div>
  )
}

export const Paragraph = styled.div`
  text-align: justify;
  text-indent: 1em;
  margin-top: 5px;
`

export const BioSection = styled.div`
  padding-left: 3.2em;
  text-indent: -3.4em;
  margin-top: 5px;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`
