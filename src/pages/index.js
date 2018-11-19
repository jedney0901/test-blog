import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'


const IndexPage = ({
  data
}) => {
  const { allMarkdownRemark: post } = data;
  return (
    <Layout>
      <h1>Camilles Blog</h1>
      <p>Please start designing me.</p>
      <p>So you can write some cool shit.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>

      {post.edges.map(x => console.log(x) || <Link to={x.node.frontmatter.path}>{x.node.frontmatter.title}</Link>)}

    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }} }
      ) {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            published
          }
        }
      }
    }
  }
`

export default IndexPage
