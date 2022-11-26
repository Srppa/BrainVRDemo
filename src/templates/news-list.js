/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
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
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 300, height: 200)
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
    const { data } = this.props
    const newsSlug = "/news/"

    const news = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <NewsCard key={edge.node.id} data={edge.node} />)

    return (
      <Layout className="news-page">
        <Seo
          title={"News — Page "}
          description={
            "Stackrole base news page "
          }
        />
        <h1>Aktuality</h1>
        <div className="news-flex">{news}</div>
      </Layout>
    )
  }
}

export default NewsIndex
