import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Subtitle = styled.div`
  margin-top: -1.2rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: dimgrey;
  font-style: italic;
  filter: brightness(120%);
`

const IndexPage = () => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`]}
      title="Home"
    />
    <h1>Hello and Welcome</h1>
    <Subtitle>The power of imagination makes us infinite &mdash; John Muir</Subtitle>
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
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
