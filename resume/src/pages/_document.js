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
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>josef.aidt: Resume</title>
          <meta property="og:url" content="https://resume.josefaidt.dev"></meta>
          <meta property="og:title" content="Resume"></meta>
          <meta property="twitter:title" content="Resume"></meta>
          <meta
            property="og:description"
            content="Josef Aidt is a Full-Stack JavaScript Developer from Baton Rouge, Louisiana"
          ></meta>
          <meta
            property="twitter:description"
            content="Josef Aidt is a Full-Stack JavaScript Developer from Baton Rouge, Louisiana"
          ></meta>
          <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
          <meta property="image" content="/images/favicon.png"></meta>
          <meta property="og:image" content="/images/favicon.png"></meta>
          <meta property="twitter:image" content="/images/favicon.png"></meta>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="twitter:card" content="summary"></meta>
          <meta name="twitter:creator" content="@josefaidt"></meta>
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
