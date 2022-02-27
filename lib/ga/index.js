export const pageview = url => {
  window.gtag('config', 'G-D0R4YZSHHS', {
    page_path: url
  })
}

export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
