export const pageview = url => {
  window.gtag('config', 'G-D0R4YZSHHS', {
    page_path: url
  })
}