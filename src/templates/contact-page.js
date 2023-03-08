/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="contact-page">
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div>
        <h1>{frontmatter.title}</h1>
        <div className="description contact-info">
          <p>Národní ústav duševního zdraví</p>
          <p>Centrum výzkumu virtuální reality v duševním zdraví a neurovědách</p>
        </div>
      </div>
      <div className="adress-container">
        <p>Adresa: Národní ústav duševního zdraví, Topolová 748, 250 67, Klecany</p>
      </div>
      <div className="mail-container">
      <p>Email:  <a className="contact-mail" href="mailto:info@brainvr.cz">info@brainvr.cz</a></p>
      <p className="to-form">nebo vyplňte kontaktní dotazník:</p>
      <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Jméno
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              Předmět
              <input type="text" name="subject" required />
            </label>
          </p>
          <p>
            <label>
              Zpráva<textarea name="message" required></textarea>
            </label>
          </p>
          <p className="text-align-right">
            <button
              className="button"
              sx={{
                variant: "variants.button",
              }}
              type="submit"
            >
              Odeslat{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default Contact

