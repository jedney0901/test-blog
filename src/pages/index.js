import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'


const IndexPage = () => (
  <Layout>
    <h1>Camilles Blog</h1>
    <p>Please start designing me.</p>
    <p>So you can write some cool shit.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
