/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ToolCard from "../components/tool-card"
import Seo from "../components/seo"

export const toolsListQuery = graphql`
  query toolsListQuery {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "tool" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY")
            slug
            title
            authors
            language
          }
        }
      }
    }
  }
`

class ToolsIndex extends React.Component {
  render() {
    const { data, pageContext } = this.props

    let LanguagePosts;
    
    if(pageContext.language == "cz"){
      LanguagePosts = data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.language === "cz")
    } else {
      LanguagePosts = data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.language === "en")
    }
    
    const posts = LanguagePosts
      .map(edge => <ToolCard key={edge.node.id} data={edge.node} />)

    this.messages = pageContext.messages;

    return (
      <Layout pageContext={pageContext} className="blog-page">
        <Seo
          title={"Tool — Page"}
          description={
            "List tools BrainVR has developed to improve psychical well-being using VR technology"
          }
        />
        <h1>{this.messages["tools"]}</h1>
        <div className="grids col-1 sm-1 lg-1 tool-grid">{posts}</div>
      </Layout>
    )
  }
}

export default ToolsIndex
