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
          }
        }
      }
    }
  }
`

class ToolsIndex extends React.Component {
  render() {
    const { data, pageContext } = this.props
    
    const posts = data.allMarkdownRemark.edges
      .map(edge => <ToolCard key={edge.node.id} data={edge.node} />)

    return (
      <Layout pageContext={pageContext} className="blog-page">
        <Seo
          title={"Tool — Page"}
          description={
            "List tools BrainVR has developed to improve psychical well-being using VR technology"
          }
        />
        <h1>Nástroje</h1>
        <div className="grids col-1 sm-1 lg-1 tool-grid">{posts}</div>
      </Layout>
    )
  }
}

export default ToolsIndex
