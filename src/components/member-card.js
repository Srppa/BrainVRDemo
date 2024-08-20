/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import LinkTranslated from "../LinkTranslated";

const MemberCard = ({ data }) => (
  <article className="member-card">
    {data.frontmatter.featuredImage ? (
      <LinkTranslated href={data.frontmatter.slug}>
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
        />
      </LinkTranslated>
    ) : (
      ""
    )}
    <div className="member-card-content">
      <h2 className="title">
        <LinkTranslated href={data.frontmatter.slug}>
          {data.frontmatter.title}
        </LinkTranslated>
      </h2>
      <p className="meta" >
        {data.frontmatter.description}
      </p>
    </div>
  </article>
)

export default MemberCard
