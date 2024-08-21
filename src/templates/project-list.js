/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProjectCard from "../components/project-card"
import Seo from "../components/seo"


export const blogListQuery = graphql`
  query blogListQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
      filter: { frontmatter: { template: { eq: "project-post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
            isActive
            language
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 350, height: 250, transformOptions:{fit: COVER, cropFocus: CENTER})
              }
            }
          }
        }
      }
    }
  }
`

class ProjectIndex extends React.Component {
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
      .filter(edge => edge.node.frontmatter.isActive === true)
      .map(edge => <ProjectCard key={edge.node.id} data={edge.node} />)

    const inactivePosts = LanguagePosts
      .filter(edge => edge.node.frontmatter.isActive === false)
      .map(edge => <ProjectCard key={edge.node.id} data={edge.node} />)

    this.messages = pageContext.messages;

    return (
      <Layout pageContext={pageContext} className="blog-page">
        <Seo
          title={"Project — Page "}
          description={
            "Brain VR project page "
          }
        />
        <h1>{this.messages["current-projects"]}</h1>
        <div className="grids col-1 sm-2 lg-3">{posts}</div>
        <h1 className="inActive-title">{this.messages["finished-projects"]}</h1>
        <div className="grids col-1 sm-2 lg-3">{inactivePosts}</div>
      </Layout>
    )
  }
}

export default ProjectIndex
