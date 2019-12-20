module.exports = {
  siteMetadata : {
    title : "Gatsby Bootcamp",
    author : "Kumail",
  },
  plugins : [
    'gatsby-plugin-sass',
    {
      resolve : 'gatsby-source-filesystem',
      options : {
        name : 'src',
        path : `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}