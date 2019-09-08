import React from 'react'
import Layout from '../components/Skeleton'
import SEO from '../components/seo'
import Emoji from '../components/styles/Emoji'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      Whoops, someone didn&#39;t test their work well enough... <Emoji>🙄</Emoji>
    </p>
  </Layout>
)

export default NotFoundPage
