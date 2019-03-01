// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'

import App, { Container } from 'next/app'

export default class extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
