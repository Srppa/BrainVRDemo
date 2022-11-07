/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import MediaCard from "./media-card"

export default function MediaList(props) {
  const data = props.data
  const posts = data.edges
    .map(edge => <MediaCard key={edge.node.id} data={edge.node} />)
  return <MediaMaker data={posts} />
}

const MediaMaker = ({ data }) => (
  <section className="home-posts medias">
    <h2>
      Zprávy o nás{" "}
    </h2>
    <div className="medias-container">{data}</div>
  </section>
)
