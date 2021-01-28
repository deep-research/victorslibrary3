// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Victor's Library",
  siteDescription: "Research on Music and Religion",
  plugins: [],
  siteUrl: "https://victorslibrary.com",
  // Turn off pathPrefix for custom domain
  pathPrefix: "/victorslibrary3",
  titleTemplate: "Victor's Library - %s",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'writing/**/*.md',
        typeName: 'Article',
        remark: {
          // remark options
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
