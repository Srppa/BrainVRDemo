/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  //pageContext

  return (
    <Layout className="page">
      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        image={Image}
        article={true}
      />
      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
          </section>
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {frontmatter.isActive ? (
          <div className="contactActive">
            <h3>Kontakt</h3>
            <p>Kontaktní osobou pro tento projekt je {frontmatter.contactName}. Pokud máte zájem účastnit se experimentu, stačí kliknout na níže uvedenou emailovou adresu a poslat email</p>
            <a href={"mailto:" + frontmatter.contactEmail + "?subject=Účast na " + frontmatter.title}>{frontmatter.contactEmail}</a>
          </div>
        ) : (
          ""
        )}
      </article>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query ProjectPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        slug
        title
        isActive
        contactName
        contactEmail
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
