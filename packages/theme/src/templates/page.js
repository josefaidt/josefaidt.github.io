import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql as gql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { Layout as StyledLayout, Header, Container, Main } from 'theme-ui'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SEO from '../components/SEO'

const Layout = ({ children, pageContext }) => {
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
      <StyledLayout>
        <Container>
          <Header>
            <Link to="/">
              <h1>{query.site.siteMetadata.title}</h1>
            </Link>
            <Nav />
          </Header>
          <Main>
            <MDXProvider>{children}</MDXProvider>
          </Main>
          <Footer />
        </Container>
      </StyledLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isBlog: PropTypes.bool,
}

export default Layout
