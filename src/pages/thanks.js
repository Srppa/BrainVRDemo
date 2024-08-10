import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Thank you" />
    <div className="wrapper">
      <h1>Vaši zprávu jsme přijali</h1>
      <p>Děkujeme za zájem, brzy se vám ozveme</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Domovská stránka
      </Link>
    </div>
  </Layout>
)

export default Thanks
