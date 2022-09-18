/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Layout from "../components/layout"
import PostCard from "../components/post-card"
import Seo from "../components/seo"


export const blogListQuery = graphql`
  query blogListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            isActive
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const blogSlug = "/blog/"

    const posts = data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.isActive == true)
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PostCard key={edge.node.id} data={edge.node} />)

    
    const inactivePosts = data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.isActive == false)
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)

    return (
      <Layout className="blog-page">
        <Seo
          title={"Blog — Page "}
          description={
            "Stackrole base blog page "
          }
        />
        <h1>Projekty</h1>
        <div className="grids col-1 sm-2 lg-3">{posts}</div>
        <h1 className="inActive-title">Ukončené Projekty</h1>
        <div className="grids col-1 sm-2 lg-3">{inactivePosts}</div>
      </Layout>
    )
  }
}

export default BlogIndex
