/** @jsx jsx */
import { jsx } from "theme-ui"

import LinkTranslated from "../LinkTranslated";

const ToolCard = ({ data }) => (
  <article className="publication-card">
    <div className="publication-content">
      <h2 className="title">
        <LinkTranslated href={data.frontmatter.slug}>{data.frontmatter.title}</LinkTranslated>
      </h2>
      <p className="meta">{data.frontmatter.authors} ({data.frontmatter.date})</p>
    </div>
  </article>
)

export default ToolCard
