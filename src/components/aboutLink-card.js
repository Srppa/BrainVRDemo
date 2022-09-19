/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const AboutLinkCard = ({ data }) => (
  <article
    className="aboutLink-card"
  >
    <div className="aboutLink-content">
      <h3 className="title">
        <Link
          to={data.frontmatter.link}
          sx={{
            variant: "links.postLink",
          }}
        >
          {data.frontmatter.title}
        </Link>
      </h3>
      <p>{data.frontmatter.date}</p>
    </div>
  </article>
)

export default AboutLinkCard
