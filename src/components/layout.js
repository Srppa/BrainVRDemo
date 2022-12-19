/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

import "../assets/scss/style.scss"
import Footer from "./footer"
import Theme from "../components/theme"
import Search from "../components/search"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ children, className, props }) => {
  const { site, siteSearchIndex } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      <div className="header-outside">
        <Header>
        
          <div className="site-logo">
            <Link to="/">
              <img src="/assets/brain-logo-blue.png" style={{ height: "75px"}}/>
            </Link>
            <Link style={{display: "none"}} to="https://www.nudz.cz/vyzkum/centrum-virtualni-reality-v-dusevnim-zdravi-a-neurovedach">
              <img src="/assets/nudz-logo-blue.png" style={{ height: "75px", width: "auto"}}/>
            </Link>
          </div>
          <div sx={layoutStyle.nav}>
            <Navigation />
          </div>
        
        </Header>
      </div>
      <div className="participate-container">
          <Link to="/blog"><span>&#x2022;</span> Zapojte se <span>&#x2022;</span></Link>
        </div>
      <main className={"container " + className}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
