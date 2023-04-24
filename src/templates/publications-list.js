/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
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
    //this.props.pageContext
    const blogSlug = "/publications/"

    const posts = data.allMarkdownRemark.edges
      .map(edge => <PublicationCard key={edge.node.id} data={edge.node} />)

    return (
      <Layout className="blog-page">
        <Seo
          title={"Blog — Page"}
          description={
            "Stackrole base blog page"
          }
        />
        <h1>Publikace</h1>
        <div className="grids col-1 sm-1 lg-1 publication-grid">{posts}</div>
      </Layout>
    )
  }
}

export default PublicationsIndex
