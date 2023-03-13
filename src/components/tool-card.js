/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const ToolCard = ({ data }) => (
  <article
    className="tool-card"
  >
    <div className="tool-content">
      <h2 className="title">
        <Link
          to={data.frontmatter.slug}
          sx={{
            variant: "links.postLink",
          }}
        >
          {data.frontmatter.title}
        </Link>
      </h2>
      <p
        className="meta"
      >
        {data.frontmatter.authors}
      </p>
    </div>
  </article>
)

export default ToolCard
