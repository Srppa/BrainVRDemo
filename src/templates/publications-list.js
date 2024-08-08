/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PublicationCard from "../components/publication-card"
import Seo from "../components/seo"

export const publicationsListQuery = graphql`
  query publicationsListQuery {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "publication" } } }
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

class PublicationsIndex extends React.Component {
  render() {
    const { data } = this.props

    const posts = data.allMarkdownRemark.edges
      .map(edge => <PublicationCard key={edge.node.id} data={edge.node} />)

    return (
      <Layout className="blog-page">
        <Seo
          title={"Projets — Page"}
          description={
            "List of all projects BrainVR in woking on as well as past endeavors"
          }
        />
        <h1>Publikace</h1>
        <div className="grids col-1 sm-1 lg-1 publication-grid">{posts}</div>
      </Layout>
    )
  }
}

export default PublicationsIndex
