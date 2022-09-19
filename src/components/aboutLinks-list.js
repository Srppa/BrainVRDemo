/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import AboutLinkCard from "./aboutLink-card"

export default function AboutLinksList(props) {
  const data = props.data
  const posts = data.edges
    .map(edge => <AboutLinkCard key={edge.node.id} data={edge.node} />)
  return <AboutLinksMaker data={posts} />
}

const AboutLinksMaker = ({ data }) => (
  <section className="home-posts aboutLinks">
    <h2>
      Zprávy o nás{" "}
    </h2>
    <div className="aboutLinks-container">{data}</div>
  </section>
)
