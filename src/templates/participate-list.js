/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ParticipateCard from "../components/participate-card"
import Seo from "../components/seo"


export const blogListQuery = graphql`
  query mediaListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "participate-link" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            pdf
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 413, height: 584)
              }
            }
          }
        }
      }
    }
    pdfsData: allFile(filter: {extension: {eq: "pdf"}}) {
      edges {
        node {
          id
          name
          publicURL
        }
      }
    }
  }
`

class ParticipateIndex extends React.Component {
  render() {
    const {data, pageContext} = this.props

    data.allMarkdownRemark.edges.forEach(element => {
      const selected = data.pdfsData.edges
        .filter(edge => edge.node.name === element.node.frontmatter.pdf)
      element.node.frontmatter.pdfURL = selected[0].node.publicURL
    });

    const posts = data.allMarkdownRemark.edges
      .map(edge => <ParticipateCard key={edge.node.id} data={edge.node} />)

    this.messages = pageContext.messages;


    return (
      <Layout pageContext={pageContext} className="participate-page">
        <Seo
          title={"Participate - Page"}
          description={
            "Do you want to participate in VR experimnts - you are at right place!"
          }
        />
        <h1>{this.messages["participate"]}</h1>
        <div className="participate-flex">{posts}</div>
      </Layout>
    )
  }
}

export default ParticipateIndex
