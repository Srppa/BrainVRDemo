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

const Contact = ({ data, pageContext }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  console.log("massage")
  console.log(pageContext)

  return (
    <Layout pageContext={pageContext} className="contact-page">
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div>
        <h1>{frontmatter.title}</h1>
        <div className="description contact-info">
          <p>{pageContext.messages["nudz-name"]}</p>
          <p>{pageContext.messages["group-name"]}</p>
        </div>
      </div>
      <div className="adress-container">
        <p>{pageContext.messages["full-adress"]}</p>
      </div>
      <div className="mail-container">
      
      <p>{pageContext.messages["vr-research"]}:  <a className="contact-mail" href="mailto:brainvrgroup@gmail.com">brainvrgroup@gmail.com</a></p>
      <p>{pageContext.messages["vr-therapy"]}:  <a className="contact-mail" href="mailto:vrterapie@nudz.cz">vrterapie@nudz.cz</a></p>
       
       
      <p className="to-form">{pageContext.messages["fill-form"]}:</p>
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
              {pageContext.messages["name"]}
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              {pageContext.messages["email"]}
              <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              {pageContext.messages["subject"]}
              <input type="text" name="subject" required />
            </label>
          </p>
          <p>
            <label>
              {pageContext.messages["message"]}
              <textarea name="message" required></textarea>
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
              {pageContext.messages["send"]}{" "}
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

