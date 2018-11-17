module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    author: 'Camille Calas'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog-posts`,
        name: 'blogPosts'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Joshs test blog',
        short_name: 'Here to type',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
}
