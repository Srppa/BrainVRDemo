/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Publication = ({ data, pageContext }) => {
  const { markdownRemark, pdfsData } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  let pdfLink = frontmatter.pdfLink;

  if(pdfLink == null){
    const pdfData = pdfsData.edges
      .filter(edge => edge.node.name === frontmatter.pdfFile)
  
    pdfLink = pdfData[0].node.publicURL
  }

  return (
    <Layout pageContext={pageContext} className="page">
      <Seo
        title={frontmatter.title}
        article={true}
      />
      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.authors} ({frontmatter.date})</p>
          </section>
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="publication-additional-info">
          <div>
            <div className="publication-info-key"><span>Kategorie:</span></div>
            <div className="publication-info-value"><span>{frontmatter.category}</span></div>
          </div>
          <div>
            <div className="publication-info-key"><span>Publikace:</span></div>
            <div className="publication-info-value"><span>{frontmatter.jurnal}</span></div>
          </div>
          <div>
            <div className="publication-info-key"><span>Datum:</span></div>
            <div className="publication-info-value"><span>{frontmatter.date}</span></div>
          </div>
          <div>
            <div className="publication-info-key"><span>Odkazy:</span></div>
            <div className="publication-info-value publication-info-pdf"><a href={pdfLink} target="_blank" rel="noreferrer">PDF</a></div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default Publication

export const pageQuery = graphql`
  query PublicationPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY")
        slug
        title
        authors
        category
        jurnal
        pdfLink
        pdfFile
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
