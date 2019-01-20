import React, { Component } from 'react'
import { graphql as gql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/Skeleton'

const ALL_BLOG_QUERY = gql`
  query ALL_BLOG_QUERY {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          html
        }
      }
    }
  }
`

const BlogPage = () => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`]}
      title="Home"
    />
    <h1>Hello</h1>
    <p>
      My name is Josef, and I am a 26-year-old alumnus of Louisiana State University. I'm a
      full-stack JavaScript developer currently employed as a Frontend UI Developer at{' '}
      <a href="https://twitter.com/IBM" target="_blank">
        @IBM
      </a>
      . When I'm not thinking about work or my personal projects I might be playing with my two
      goofball dogs &mdash; Marvin and Maverick, hanging out with my friends enjoying our favorite
      music tracks, or I might just be listening to deep house music playing video games. I'm a
      sucker for movies with great soundtracks (i.e. written by John Williams) and Reese's
      seasonals. Over the years I've taken interest in the wild world of the web and all it has to
      offer. <br />
      <Link to="/about/">Read more.</Link>
    </p>
    <Quote>The power of imagination makes us infinite &mdash; John Muir</Quote>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)
