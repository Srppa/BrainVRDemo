/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"
import {
  RiFacebookBoxFill,
  RiGithubFill
} from "react-icons/ri"

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-links">
        <Link className="nudz-link" to="https://www.nudz.cz/vyzkum/centrum-virtualni-reality-v-dusevnim-zdravi-a-neurovedach">
          <img src="/assets/logo-nudz-high.png"/>
        </Link>
        <Link className="l3lf-link" to="https://www.lf3.cuni.cz/">
          <img src="/assets/logo-3lf.png"/>
        </Link>
        <div className="small-logos">
          <Link className="facebook-link" to="https://www.facebook.com/people/Virtu%C3%A1ln%C3%AD-realita-v-neurov%C4%9Bd%C3%A1ch-NUDZ/100064054324979/">
          <RiFacebookBoxFill alt="facebook icon" />
          </Link>
          <Link className="github-link" to="https://github.com/brainvr">
          <RiGithubFill alt="github icon" />
          </Link>
        </div>
      </div>
      <div className="footer-text">
        <p>© 2022 BrainVR</p>
        <p>Made by Pavel Srp using <Link to="/https://foundation.stackrole.com/">Stackrole.com</Link></p>
      </div>
    </div>
  </footer>
)

export default Footer
