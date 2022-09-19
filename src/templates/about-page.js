import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutLinksList from "../components/aboutLinks-list"

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    aboutLinks: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "aboutLink" } } }
      limit: 4
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            link
          }
        }
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark, aboutLinks } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page about-page">
      <Seo title={frontmatter.title} description={excerpt} />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <AboutLinksList data={aboutLinks}/>
    </Layout>
  )
}

export default AboutPage
