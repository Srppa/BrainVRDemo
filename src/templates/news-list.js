/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import NewsCard from "../components/news-card"
import Seo from "../components/seo"


export const newsListQuery = graphql`
  query newsListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "news-post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD. MM. YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 100, height: 100)
              }
            }
          }
        }
      }
    }
  }
`

class NewsIndex extends React.Component {
  render() {
    const { data, pageContext } = this.props

    const news = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <NewsCard key={edge.node.id} data={edge.node} />)

    this.messages = pageContext.messages;

    return (
      <Layout pageContext={pageContext} className="news-page">
        <Seo
          title={"News - Page"}
          description={
            "Info about new events that BrainVR group will be part of"
          }
        />
        <h1>{this.messages["news"]}</h1>
        <div className="news-flex">{news}</div>
      </Layout>
    )
  }
}

export default NewsIndex
