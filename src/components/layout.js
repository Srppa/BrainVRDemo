/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Navigation from "./navigation"
import LinkTranslated from "../LinkTranslated";

import "../assets/scss/style.scss"
import Footer from "./footer"


const Layout = ({ children, className, pageContext}) => {
  return (
      <div className="primary-container">
      <div className="header-outside">
        <header className="site-header">
          <div className="site-logo">
            <LinkTranslated href="/">
              <img src="/assets/brain-logo-header.png" alt="BrainVR logo" style={{ height: "75px"}}/>
            </LinkTranslated>
            {
              pageContext.language == "cz"?
              (<Link className="site-logo-nudz" target="_blank" to="https://www.nudz.cz/vyzkum/centrum-virtualni-reality-v-dusevnim-zdravi-a-neurovedach">
                <img src="/assets/nudz-logo-header.png" alt="nudz logo" style={{ height: "65px", width: "auto"}}/>
              </Link>) :
              (<Link className="site-logo-nudz" target="_blank" to="https://www.nudz.cz/en/research/center-for-virtual-reality-research-in-mental-health-and-neuroscience">
                <img src="/assets/nudz-logo-header_en.png" alt="nudz logo" style={{ height: "65px", width: "auto"}}/>
              </Link> )
            }
            
          </div>
          <div>
            <Navigation pageContext={pageContext}/>
          </div>
        </header>
      </div>
      <div className="participate-container">
        <div className="participate-container-inner">
          <LinkTranslated href="/participate">
            {pageContext.messages["participate"]}
          </LinkTranslated>
        </div>    
      </div>
      <main className={"container " + className}>{children}</main>
      <Footer pageContext={pageContext} />
    </div>
  )
}

export default Layout