import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Head from 'components/head'

const Work = ({ data }) => (
  <Layout>
    <Head pageTitle={data.workJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.workJson.content.childMarkdownRemark.html
        }}
      />
    </Box>
  </Layout>
)

Work.propTypes = {
  data: PropTypes.object.isRequired
}

export default Work

export const query = graphql`
  query WorkQuery {
    workJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
