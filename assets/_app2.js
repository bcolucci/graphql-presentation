// pages/_app.js

// [...]

import { ApolloProvider } from 'react-apollo'
import withApollo from '../lib/withApollo'

export default class extends App {
  render () {
    const { /* [...] */ apollo } = this.props
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}
