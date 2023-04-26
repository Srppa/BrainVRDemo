/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const MediaCard = ({ data }) => (
  <article
    className="media-card"
  >
    <div className="media-content">
      <p className="medium-info">{data.frontmatter.medium} {data.frontmatter.paid ? ("(placené)") : ("(zdarma)")}
    </p>
      <h3 className="title">
        <a
          href={data.frontmatter.link}
          target="_blank"
          sx={{
            variant: "links.mediaLink",
          }}
        >
          {data.frontmatter.title}
        </a>
      </h3>
      <p>{data.frontmatter.date}</p>
    </div>
  </article>
)

export default MediaCard
