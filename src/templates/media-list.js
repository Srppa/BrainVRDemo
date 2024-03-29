/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Layout from "../components/layout"
import PostCard from "../components/media-card"
import Seo from "../components/seo"


export const blogListQuery = graphql`
  query mediaListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "media-link" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD. MM. YYYY")
            title
            link
          }
        }
      }
    }
  }
`

class MediaIndex extends React.Component {
  render() {
    const { data } = this.props
    const mediaSlug = "/media/"

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PostCard key={edge.node.id} data={edge.node} />)

    return (
      <Layout className="media-page">
        <Seo
          title={"Media — Page "}
          description={
            "brain vr media page "
          }
        />
        <h1>Média</h1>
        <div className="media-flex">{posts}</div>
      </Layout>
    )
  }
}

export default MediaIndex
