import React from 'react'
import PropTypes from 'prop-types'
import { graphql as gql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from 'components/Skeleton'
import Image from 'components/image'
import SEO from 'components/seo'
import Line from 'components/styles/Line'
import Quote from 'components/styles/Quote'
import Emoji from 'components/styles/Emoji'

const AboutPage = props => (
  <Layout>
    <SEO
      image={props.data.allFile.edges[0].node.publicURL}
      keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`]}
      title="About"
    />
    <h1>About Me</h1>
    <Image />
    <Quote>
      Welcome to version 2 of my website, powered by{' '}
      <OutboundLink href="https://gatsbyjs.org" target="_blank">
        Gatsby.js
      </OutboundLink>
    </Quote>
    <p>It all started in a quaint little town called Huntington, West Virgina...</p>
    <p>
      I grew up in a family of six, with three younger brothers. We all look similar, sporting the
      frequently-mispelled surname of Aidt
      <b>
        <a href="#funfact_1">
          <sup>1</sup>
        </a>
      </b>
      . My family moved a few times while I was younger to a few different states &mdash; namely
      West Virgina, North Carolina, and Ohio &mdash; before moving to Louisiana as a final stop.
    </p>
    <p>
      It was Louisiana that I spent most of my childhood and finished school, all the while
      participating in extra-carricular activies such as Boy Scouts
      <b>
        <a href="#funfact_2">
          <sup>2</sup>
        </a>
      </b>
      , marching band, jazz band, and sports! Sports didn&#39;t end up lasting long, but band stuck.
      I went on to play trumpet in LSU&#39;s marching band,{' '}
      <OutboundLink href="https://www.bands.lsu.edu/tigerband" target="_blank">
        The Golden Band from Tigerland
      </OutboundLink>
      . During my time at LSU I gained an adoration for web development and the technology behind
      the web, after all, I grew up online. Whether I was online learning or playing video games I
      always ended up browsing the web to find new and exciting websites fashioned with that next
      level of design flair.
    </p>
    <p>
      <i>I never thought about getting into development.</i> My curriculum included classes that
      covered C++ and C#, SEO and the surrounding business, and even higher-level concepts regarding
      web usability and e-commerce. But it wasn&#39;t until I was in my final semester in college
      taking a communications-intensive art course that focused in web design. That&#39;s when I
      realized that I enjoyed building for the web. Not necessarily grinding out websites all the
      time, but actually building using web technologies.
    </p>
    <p>
      After school I went full-time as a desktop support analyst at the local hospital, working for{' '}
      <OutboundLink
        href="https://www.linkedin.com/company/franciscan-missionaries-of-our-lady-health-system/about/"
        target="_blank"
      >
        FMOL Health System
      </OutboundLink>
      . There I was able to apply knowledge learned from my degree in addition to leaning on my
      brief programming background to help streamline existing processes and improve overall
      performance. It was great to learn while on the job, technically and intrapersonally. After
      leading deployment and discovery projects for our team, as well as assist in large-scale
      equipment deployments for the largest IT project in company history, I was presented with an
      opportunity to join the company&#39;s Business Information Services (BIS) team. There I was
      stationed to work for the ERP portion of the team utilizing my frontend web development
      skillset to engineer, modify, and maintain ERP submodules. Other than my web development
      assignments I developed ETL processes using SQL to ultimately create visual reports on
      scrubbed, reportable data by using SQL Server Reporting Services and{' '}
      <OutboundLink href="https://www.tableau.com/" target="_blank">
        Tableau
      </OutboundLink>
      .
    </p>
    <p>
      Now we&#39;re to the present time. I&#39;ve continued to improve my IT and full-stack web
      development skillset by creating numerous JavaScript-based projects and maintaining my
      container-based{' '}
      <OutboundLink href="https://plex.tv" target="_blank">
        Plex
      </OutboundLink>{' '}
      stack in my off-time. I am currently employed as a Frontend UI Developer{' '}
      <OutboundLink href="https://twitter.com/IBM" target="_blank">
        @IBM
      </OutboundLink>{' '}
      to further grow my ability to build for the web. In my spare time I like to contribute to a
      few official open source projects and repos, one of which is{' '}
      <OutboundLink href="https://gatsbyjs.org">Gatsby</OutboundLink> where I&#39;ve submitted my
      efforts in the form of providing technical documentation.
    </p>
    <p>
      Overall I hope to further my abilities as a full-stack JavaScript developer by striving for
      growth, both in the workplace and as an individual. If you&#39;d like to see what I&#39;m
      currently working on I urge you to stop by my{' '}
      <OutboundLink href="https://github.com/josefaidt">Github</OutboundLink>.
    </p>
    <Line />
    <h3>Fun-Facts:</h3>
    <ul>
      <li>
        <b>
          <sup id="funfact_1">1</sup>
        </b>
        there&#39;s a{' '}
        <OutboundLink href="https://en.wikipedia.org/wiki/Aidt" target="_blank">
          small Danish town called Aidt
        </OutboundLink>
      </li>
      <li>
        <b>
          <sup id="funfact_2">2</sup>
        </b>
        I&#39;m an Eagle Scout! <Emoji>🦅</Emoji>
      </li>
      <li>
        I&#39;m left-handed <Emoji>👍</Emoji>
      </li>
      <li>
        I love the National Park System <Emoji>🏞</Emoji>
      </li>
      <li>
        I also love to go camping <Emoji>🏕</Emoji>
      </li>
    </ul>
  </Layout>
)

AboutPage.protoTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const query = gql`
  query ABOUT_SEO {
    allFile(filter: { name: { eq: "josef" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`
