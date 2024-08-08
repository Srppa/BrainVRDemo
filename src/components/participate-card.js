/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ParticipateCard = ({ data }) => (
  <article
    className="participate-card"
  >
    <div className="media-content">
      <h3 className="title">
        <Link to={data.frontmatter.pdfURL} target="_blank" className="participate-link-container">
          <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
          />
        </Link>
      </h3>
    </div>
  </article>
)

export default ParticipateCard
