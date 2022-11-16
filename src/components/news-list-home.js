/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import NewsCard from "./news-card"

export default function NewsListHome(props) {
  const data = props.data
  const news = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <NewsCard key={edge.node.id} data={edge.node} />)
  return <NewsMaker data={news} />
}

const NewsMaker = ({ data }) => (
  <section className="home-news news-home-list">
    <h2>
      Aktuality{" "}
    </h2>
    <div className="news-flex">{data}</div>
    <Link
      className="button"
      to="/news"
      sx={{
        variant: "variants.button",
      }}
    >
      Více Aktualit
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
  </section>
)
