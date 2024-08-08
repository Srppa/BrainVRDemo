/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PostCard = ({ data }) => (
  <article className="post-card">
    {data.frontmatter.featuredImage ? (
      <div className="post-card-container">
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
    <div className="post-content">
      <h2 className="title">
        <Link to={data.frontmatter.slug}>
          {data.frontmatter.title}
        </Link>
      </h2>
    </div>
  </article>
)

export default PostCard
