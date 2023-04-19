const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { Console } = require("console")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogList = path.resolve(`./src/templates/blog-list.js`)

  const teamList = path.resolve(`./src/templates/team-list.js`)

  const publicationsList = path.resolve(`./src/templates/publications-list.js`)

  const mediaList = path.resolve(`./src/templates/media-list.js`)

  const newsList = path.resolve(`./src/templates/news-list.js`)

  const toolsList = path.resolve(`./src/templates/tools-list.js`)

  const participateList = path.resolve(`./src/templates/participate-list.js`)

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
              pdf
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create markdown pages
  const posts = result.data.allMarkdownRemark.edges
    	.filter(edge => edge.node.frontmatter.template != "media-link")
      .filter(edge => edge.node.frontmatter.template != "participate-link")

  posts.forEach((post, index) => {
    const id = post.node.id

    createPage({
      path: post.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(post.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
        //previous,
        //next,
      },
    })
  })

  //blog
  createPage({
    path: `/projects`,
    component: blogList,
  })

  // team-members
  createPage({
    path: `/team`,
    component: teamList
  })

  //publications

  createPage({
    path: `/publications`,
    component: publicationsList,
  })
  
  createPage({
    path: `/media`,
    component: mediaList,
  })

  createPage({
    path: `/news`,
    component: newsList,
  })

  createPage({
    path: `/tools`,
    component: toolsList,
  })

  createPage({
    path: `/participate`,
    component: participateList,
  })

  
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
