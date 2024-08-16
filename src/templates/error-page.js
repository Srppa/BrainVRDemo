import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine } from "react-icons/ri"


//import {FormattedMessage} from "react-intl";
//import LinkTranslated from "../linkTranslated";
//import SimpleLocalize from "../simpleLocalize";

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
const ErrorPage = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  return (
    <Layout pageContext={pageContext} className="page about-page">
      <Seo title="Page not found" />
    <div className="wrapper">
      <div>
        <h1>404</h1>
        <p>
          {frontmatter.title}
        </p>
      </div>
      <div className="not-found-bottons">
        <Link to="/" className="button">
          <RiArrowLeftSLine className="icon -left" />
          Domovská stranka
        </Link>
        <Link to="/contact" className="button -outline">
          Kontakt<RiBugLine className="icon -right" />
        </Link>
      </div>
      
    </div>
    </Layout>
  )
}

export default ErrorPage