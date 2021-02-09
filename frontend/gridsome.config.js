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
  pathPrefix: "/victorslibrary3-gridsome",
  titleTemplate: "Victor's Library - %s",
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Article',
        baseDir: './src/writing/',
        template: './src/templates/Articles.vue',
        plugins: []
      }
    }
  ]
}
