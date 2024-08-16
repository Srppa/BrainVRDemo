/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import Layout from "../components/layout"
import NewsListHome from "../components/news-list-home"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 264, height: 264)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    news: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "news-post" } } }
      limit: 4
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD. MM. YYYY")
            slug
            title
            description
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

const HomePage = ({ data, pageContext }) => {
  const { markdownRemark, news } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.gatsbyImageData : ""
  return (
    <Layout pageContext={pageContext}>
      <Seo />
      <div className="home-banner grids">
        <div className="title-box">
          <h1 className="title">{frontmatter.title}</h1>
          <p className="tagline" >
            {frontmatter.tagline}
          </p>
          <Link
            to={frontmatter.cta.ctaLink}
            className="button"
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>
        </div>
        <div className="home-banner-img">
          {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
              objectFit="contain"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <NewsListHome data={news} />
    </Layout>
  )
}

export default HomePage
