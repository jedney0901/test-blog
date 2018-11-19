import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Template = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <div style={{
                background: 'pink',
                height: '100vh',
                padding: '2.5rem'
            }}>
                <h1>
                    {post.frontmatter.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`

export default Template