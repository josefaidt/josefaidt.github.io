import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Head from 'components/head'

const Test = ({ data }) => (
  <Layout>
    <Head pageTitle={data.testJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.testJson.content.childMarkdownRemark.html
        }}
      />
    </Box>
  </Layout>
)

Test.propTypes = {
  data: PropTypes.object.isRequired
}

export default Test

export const query = graphql`
  query TestQuery {
    testJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
