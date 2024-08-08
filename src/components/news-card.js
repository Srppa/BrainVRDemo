/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const NewsCard = ({ data }) => (
  <article className="news-card">
    {data.frontmatter.featuredImage ? (
      <div className="news-card-container">

        <Link to={data.frontmatter.slug}>
          <GatsbyImage
            image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
            alt={data.frontmatter.title + " - Featured image"}
            className="featured-image"
          />
        </Link>
      </div>
    ) : (
      ""
    )}
    <div className="news-content">
      <h2 className="title">
        <Link to={data.frontmatter.slug}>
          {data.frontmatter.title}
        </Link>
      </h2>
      <p className="meta" >
        <time>{data.frontmatter.date}</time>
      </p>
      
    </div>
  </article>
)

export default NewsCard
