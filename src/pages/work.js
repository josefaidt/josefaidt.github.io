import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Skeleton'
import SEO from '../components/seo'
import Line from '../components/flair/Line'
import Quote from '../components/styles/Quote'

const WorkPage = () => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`]}
      title="Work"
    />
    <h1>Hello</h1>
    <p>Bleep bloop</p>
  </Layout>
)

export default WorkPage
