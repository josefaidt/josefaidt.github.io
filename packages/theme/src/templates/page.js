import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql as gql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { useTheme } from '../helpers/Theme'
import { Nav, Header, SEO, GlobalStyle, Footer, Layout, Container } from '../components'

const PageLayout = ({ children, pageContext }) => {
  const theme = useTheme()
  const query = useStaticQuery(gql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <SEO />
      <GlobalStyle theme={theme} />
      <Layout theme={theme}>
        <Header siteTitle={query.site.siteMetadata.title}>
          <Nav />
        </Header>
        <Container>
          <MDXProvider>{children}</MDXProvider>
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isBlog: PropTypes.bool,
}

export default PageLayout
