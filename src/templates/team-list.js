/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MemberCard from "../components/member-card"
import Seo from "../components/seo"

export const teamListQuery = graphql`
  query teamListQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___lastName] }
      filter: { frontmatter: { template: { eq: "team-member" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
            lastName
            description
            order
            category
            language
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 256, height: 256)
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
    const { data, pageContext } = this.props
    //this.props.pageContext

    let LanguagePosts;
    
    if(pageContext.language == "cz"){
      LanguagePosts = data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.language === "cz")
    } else {
      LanguagePosts = data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.language === "en")
    }

    const headPosts = LanguagePosts
      .filter(edge => edge.node.frontmatter.category === "core")
      .filter(edge => edge.node.frontmatter.order === 0)
      .map(edge => <MemberCard key={edge.node.id} data={edge.node} />)

    const normalPosts = LanguagePosts
      .filter(edge => edge.node.frontmatter.category === "core")
      .filter(edge => edge.node.frontmatter.order !== 0)
      .map(edge => <MemberCard key={edge.node.id} data={edge.node} />)

    this.messages = pageContext.messages;

    /*
    const internPosts = data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.category === "intern")
      .map(edge => <MemberCard key={edge.node.id} data={edge.node} />)


    const alumniPosts = data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.category === "alumni")
      .map(edge => <MemberCard key={edge.node.id} data={edge.node} />)

    const externalPosts = data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.category === "external")
      .map(edge => <MemberCard key={edge.node.id} data={edge.node} />)
    */

    return (
      <Layout pageContext={pageContext} className="blog-page">
        <Seo
          title={"Blog"}
          description={
            "BrainVR blog page"
          }
        />
        <h1>{this.messages["our-team"]}</h1>
        <div className="head-member">{headPosts}</div>
        <div className="grids col-1 sm-2 lg-3">{normalPosts}</div>
      </Layout>
    )
  }
}

export default TeamIndex
