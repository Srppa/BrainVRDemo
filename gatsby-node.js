const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { Console } = require("console")

const messages = require("./src/i18n-translations.json")
const {languages, defaultLanguage} = require("./src/i18n");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectList = path.resolve(`./src/templates/project-list.js`)

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
              language
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

  //TODO: change to == "cz"
  const czPosts = posts.filter(edge => edge.node.frontmatter.language != "en") 
  const enPosts = posts.filter(edge => edge.node.frontmatter.language == "en")       

  czPosts.forEach((post, index) => {
    const id = post.node.id

    createPage({
      path: post.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(post.node.frontmatter.template)}.js`
      ),
      context: {
        id,
        language: "cz",
        messages: messages["cz"]
      },
    })
  })

  enPosts.forEach((post, index) => {
    const id = post.node.id

    createPage({
      path: "/en" + post.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(post.node.frontmatter.template)}.js`
      ),
      context: {
        id,
        language: "en",
        messages: messages["en"]
      },
    })
  })

  createPage({
    path: `/projects`,
    component: projectList,
    context: {
      language: "cz",
      messages: messages["cz"]
    },
  })

  createPage({
    path: `/en/projects`,
    component: projectList,
    context: {
      language: "en",
      messages: messages["en"]
    },
  })

  createPage({
    path: `/team`,
    component: teamList,
    context: {
      language: "cz",
      messages: messages["cz"]
    },
  })

  createPage({
    path: `/en/team`,
    component: teamList,
    context: {
      language: "en",
      messages: messages["en"]
    },
  })

  createPage({
    path: `/publications`,
    component: publicationsList,
    context: {
      language: "cz",
      messages: messages["cz"]
    },
  })

  createPage({
    path: `/en/publications`,
    component: publicationsList,
    context: {
      language: "en",
      messages: messages["en"]
    },
  })

  
  createPage({
    path: `/media`,
    component: mediaList,
    context: {
      language: "cz",
      messages: messages["cz"]
    },
  })

  createPage({
    path: `/en/media`,
    component: mediaList,
    context: {
      language: "en",
      messages: messages["en"]
    },
  })

  createPage({
    path: `/news`,
    component: newsList,
    context: {
      language: "cz",
      messages: messages["cz"]
    },
  })

  createPage({
    path: `/en/news`,
    component: newsList,
    context: {
      language: "en",
      messages: messages["en"]
    },
  })

  createPage({
    path: `/tools`,
    component: toolsList,
    context: {
      language: "cz",
      messages: messages["cz"]
    },
  })

  createPage({
    path: `/en/tools`,
    component: toolsList,
    context: {
      language: "en",
      messages: messages["en"]
    },
  })

  createPage({
    path: `/participate`,
    component: participateList,
    context: {
      language: "cz",
      messages: messages["cz"]
    },
  })

  createPage({
    path: `/en/participate`,
    component: participateList,
    context: {
      language: "en",
      messages: messages["en"],
    },
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

/*exports.onCreatePage = async ({page, actions}) => {
  const {createPage, deletePage} = actions;
  return new Promise((resolve) => {
    let path = page.path;
    deletePage(page);

    for (let language of languages) {
      const isDefaultLanguage = language === defaultLanguage;
      if (!isDefaultLanguage) {
        path = '/' + language + page.path;
      }

      const pageForLanguage = Object.assign({}, page, {
        originalPath: page.path,
        path: path,
        context: {
          language,
          messages: messages[language]
        }
      });
      createPage(pageForLanguage)
    }
    resolve()
  })
};*/
