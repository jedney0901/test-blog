import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

const Template = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <div>
            <h1>
                {post.frontmatter.title}
            </h1>
        </div>
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