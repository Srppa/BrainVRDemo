/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const MediaCard = ({ data }) => (
  <article
    className="media-card"
  >
    <div className="media-content">
      <h3 className="title">
        <Link
          to={data.frontmatter.link}
          sx={{
            variant: "links.mediaLink",
          }}
        >
          {data.frontmatter.title}
        </Link>
      </h3>
      <p>{data.frontmatter.date}</p>
    </div>
  </article>
)

export default MediaCard
