import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Page not found" />
    <div className="wrapper">
      <div>
        <h1>404</h1>
        <p>
          Tako stránka neexistuje. Pokud si myslíte že jde o chybu, prosím kontaktujte nás.
        </p>
      </div>
      <div className="not-found-bottons">
        <Link to="/" className="button">
          <RiArrowLeftSLine className="icon -left" />
          Domovská stranka
        </Link>
        <Link to="/contact" className="button -outline">
          Kontakt<RiBugLine className="icon -right" />
        </Link>
      </div>
      
    </div>
  </Layout>
)

export default NotFound
