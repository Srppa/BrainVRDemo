import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//import {FormattedMessage} from "react-intl";
//import LinkTranslated from "../linkTranslated";
//import SimpleLocalize from "../simpleLocalize";

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
  }
`
const AboutPage = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  console.log("pre");
  console.log(pageContext);

  return (
    <Layout pageContext={pageContext} className="page about-page">
      <Seo title={frontmatter.title} description={excerpt} />
        <div className="wrapper">
          <h1>{frontmatter.title}</h1>
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </Layout>
  )
}

export default AboutPage
