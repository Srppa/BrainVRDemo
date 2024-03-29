/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaWordpress, FaVk } from "react-icons/fa"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import NewsListHome from "../components/news-list-home"
import Seo from "../components/seo"
import Icons from "../util/socialmedia.json"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 264, height: 264)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    news: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "news-post" } } }
      limit: 4
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD. MM. YYYY")
            slug
            title
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 100, height: 100)
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark, posts, news } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  const sIcons = Icons.socialIcons.map((icons, index) => {
    return (
      <div key={"social icons" + index}>
        {icons.icon === "facebook" ? (
          <a href={icons.url} target="_blank" aria-label="link to Facebook" rel="noopener noreferrer">
            <RiFacebookBoxFill alt="Facebook icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "twitter" ? (
          <a href={icons.url} target="_blank" aria-label="link to Twitter" rel="noopener noreferrer">
            <RiTwitterFill alt="Twitter icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "linkedin" ? (
          <a href={icons.url} target="_blank" aria-label="link to Linkedin" rel="noopener noreferrer">
            <RiLinkedinBoxFill alt="Linkedin icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "youtube" ? (
          <a href={icons.url} target="_blank" aria-label="link to Youtube" rel="noopener noreferrer">
            <RiYoutubeFill alt="Youtube icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "instagram" ? (
          <a href={icons.url} target="_blank" aria-label="link to Instagram" rel="noopener noreferrer">
            <RiInstagramFill alt="Instagram icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "rss" ? (
          <a href={icons.url} target="_blank" aria-label="link to RSS" rel="noopener noreferrer">
            <RiRssFill alt="RSS icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "github" ? (
          <a href={icons.url} target="_blank" aria-label="link to Github" rel="noopener noreferrer">
            <RiGithubFill alt="Github icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "telegram" ? (
          <a href={icons.url} target="_blank" aria-label="link to Telegram" rel="noopener noreferrer">
            <RiTelegramFill alt="Telegram icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "pinterest" ? (
          <a href={icons.url} target="_blank" aria-label="link to Pinterest" rel="noopener noreferrer">
            <RiPinterestFill alt="Pinterest icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "snapchat" ? (
          <a href={icons.url} target="_blank" aria-label="link to Snapchat" rel="noopener noreferrer">
            <RiSnapchatFill alt="Snapchat icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "skype" ? (
          <a href={icons.url} target="_blank" aria-label="link to Skype" rel="noopener noreferrer">
            <RiSkypeFill alt="Skype icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "wordpress" ? (
          <a href={icons.url} target="_blank" aria-label="link to Wordpress" rel="noopener noreferrer">
            <FaWordpress alt="Wordpress icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "dribbble" ? (
          <a href={icons.url} target="_blank" aria-label="link to Dribbble" rel="noopener noreferrer">
            <RiDribbbleFill alt="Dribbble icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "medium" ? (
          <a href={icons.url} target="_blank" aria-label="link to Medium" rel="noopener noreferrer">
            <RiMediumFill alt="Medium icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "behance" ? (
          <a href={icons.url} target="_blank" aria-label="link to Behance" rel="noopener noreferrer">
            <RiBehanceFill alt="Behance icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "vk" ? (
          <a href={icons.url} target="_blank" aria-label="link to vk" rel="noopener noreferrer">
            <FaVk alt="vk icon" />
          </a>
        ) : (
          ""
        )}
      </div>
    )
  })
  return (
    <Layout>
      <Seo />
      <div className="home-banner grids">
        <div className="title-box">
          <h1 className="title">{frontmatter.title}</h1>
          <p
            className="tagline"
            sx={{
              color: "muted",
            }}
          >
            {frontmatter.tagline}
          </p>
          <Link
            to={frontmatter.cta.ctaLink}
            className="button"
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>
        </div>
        <div className="home-banner-img">
          {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
              objectFit="contain"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <NewsListHome data={news} />
    </Layout>
  )
}

export default HomePage
