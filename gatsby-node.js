const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators

    const postTemplate = path.resolve('src/templates/post.js');

    return graphql(`{
            allMarkdownRemark {
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            path
                            title
                        }
                    }
                }
            }
        }`).then(res => {
            console.log('bonjour');
            if (res.errors) {
                // console.log(res.errors);
                return Promise.reject(res.errors);
            }
            console.log(res.data.allMarkdownRemark.edges);
            return res.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.frontmatter.path,
                    component: postTemplate
                })
            })
        }).catch(ex => {
            console.log(ex);
            throw new Error(ex);
        })
}