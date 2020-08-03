import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#c6797e" />
          <meta name="description" content="Welcome to my personal site" />
          <meta property="og:url" content="https://josefaidt.dev" />
          <meta property="og:description" content="Welcome to my personal site" />
          {/* <meta property="og:image" content="/static/2a0f54e5b5533cf779bfe3cd78c8b2ee/favicon.png"> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@josefaidt" />
          <meta name="twitter:description" content="Welcome to my personal site" />
          <meta property="og:title" content="Blog" />
          <meta name="twitter:title" content="Blog" />
          <link rel="icon" href="/icons/logo.png"></link>
          {/* <link rel="manifest" href="/manifest.webmanifest"></link> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
