/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Navigation from "./navigation"

import "../assets/scss/style.scss"
import Footer from "./footer"

const Layout = ({ children, className, pageContext}) => {

  console.log("layout");
  console.log(pageContext);

  return (
      <div className="primary-container">
      <div className="header-outside">
        <header className="site-header">
          <div className="site-logo">
            <Link to="/">
              <img src="/assets/brain-logo-header.png" alt="BrainVR logo" style={{ height: "75px"}}/>
            </Link>
            <Link className="site-logo-nudz" target="_blank" to="https://www.nudz.cz/vyzkum/centrum-virtualni-reality-v-dusevnim-zdravi-a-neurovedach">
              <img src="/assets/nudz-logo-header.png" alt="nudz logo" style={{ height: "65px", width: "auto"}}/>
            </Link>
          </div>
          <div>
            <Navigation pageContext={pageContext}/>
          </div>
        </header>
      </div>
      <div className="participate-container">
        <div className="participate-container-inner">
          <Link to="/participate">
            {pageContext?pageContext.messages["participate"]:"plz"}
          </Link>
        </div>    
      </div>
      <main className={"container " + className}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout