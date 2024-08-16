import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Link } from "gatsby"
import { RiArrowLeftSLine } from "react-icons/ri"

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
const ThanksPage = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout pageContext={pageContext} className="page about-page">
      <Seo title="Thank you" />
        <div className="wrapper">
          <h1>{frontmatter.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: html }}></p>
          <Link to="/" className="button">
            <RiArrowLeftSLine className="icon -left" />
            Domovská stránka
          </Link>
        </div>
    </Layout>
  )
}

export default ThanksPage 