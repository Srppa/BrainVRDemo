/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import LinkTranslated from "../LinkTranslated";

const ProjectCard = ({ data }) => (
  <article className="post-card">
    {data.frontmatter.featuredImage ? (
      <div className="post-card-container">
        <LinkTranslated href={data.frontmatter.slug}>
          <GatsbyImage
            image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
            alt={data.frontmatter.title + " - Featured image"}
            className="featured-image"
          />
        </LinkTranslated>
      </div>
    ) : (
      ""
    )}
    <div className="post-content">
      <h2 className="title">
        <LinkTranslated href={data.frontmatter.slug}>
          {data.frontmatter.title}
        </LinkTranslated>
      </h2>
    </div>
  </article>
)

export default ProjectCard
