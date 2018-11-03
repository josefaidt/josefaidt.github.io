import React from 'react'
import { Link } from 'gatsby'

import page2 from './page-2'

import Navi from '../components/navi'

import Layout from '../components/layout'

const routes = [page2]

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Navi routes={routes} />
  </Layout>
)

export default IndexPage
