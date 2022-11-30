/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Layout from "../components/layout"
import MemberCard from "../components/member-card"
import Seo from "../components/seo"

export const teamListQuery = graphql`
  query teamListQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { template: { eq: "team-member" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
            description
            category
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 128, height: 128)
              }
            }
          }
        }
      }
    }
  }
`

class TeamIndex extends React.Component {
  render() {
    const { data } = this.props
    //this.props.pageContext

    const posts = data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.category == "core")
      .map(edge => <MemberCard key={edge.node.id} data={edge.node} />)
    
    const alumniPosts = data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.category == "alumni")
      .map(edge => <MemberCard key={edge.node.id} data={edge.node} />)

    const externalPosts = data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.category == "external")
      .map(edge => <MemberCard key={edge.node.id} data={edge.node} />)


    return (
      <Layout className="blog-page">
        <Seo
          title={"Blog"}
          description={
            "BrainVR blog page"
          }
        />
        <h1>Náš tým</h1>
        <div className="grids col-1 sm-2 lg-3">{posts}</div>
        <h1>Alumni</h1>
        <div className="grids col-1 sm-2 lg-3">{alumniPosts}</div>
        <h1>Spolupracovníci</h1>
        <div className="grids col-1 sm-2 lg-3">{externalPosts}</div>
      </Layout>
    )
  }
}

export default TeamIndex
