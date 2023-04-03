/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import Layout from "../components/layout"
import Seo from "../components/seo"




const styles = {
  "article blockquote": {
    "background-color": "cardBg",
  },
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "text",
      },
    },
  },
}

const Publication = ({ data, pageContext }) => {
  const { markdownRemark, download } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  console.log(download);
  console.log("asdf");

  return (
    <Layout className="page">
      <Seo
        title={frontmatter.title}
        article={true}
      />
      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.authors}</p>
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
            <div className="publication-info-value publication-info-pdf"><Link to={download.publicURL} download>pdf</Link></div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default Publication

export const pageQuery = graphql`
  query PublicationPostQuery($id: String!, $pdfPath: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY, MM")
        slug
        title
        authors
        category
        jurnal
      }
    }
    download: file( relativePath: {eq: $pdfPath } ) {
      publicURL
      name
    }
  }

`
