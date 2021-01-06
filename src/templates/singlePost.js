import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, P, PostHeader } from "../elements"
import { Container, Post, FeatureImage } from "../components"
import Img from "gatsby-image"
import styled from "styled-components"
import { TableOfContents } from "../components/blog/TableOfContents"
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"

const singlePost = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  const formatDate = dateString => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleString(undefined, options)
  }

  return (
    <>
      <PostHeader color={data.mdx.frontmatter.category}>
        <StyledImg fixed={featureImage} />
        <div>
          <p>{data.mdx.frontmatter.category}</p>
          <h1>{data.mdx.frontmatter.title}</h1>
          <div>
            <p>{formatDate(data.mdx.frontmatter.date)}</p>
            <p>{data.mdx.timeToRead} min read</p>
          </div>
          <div>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="21" cy="21" r="20.5" stroke="black" />
              <path
                d="M22.9386 25.7961C22.8916 25.7496 22.8282 25.7235 22.7621 25.7235C22.6959 25.7235 22.6325 25.7496 22.5855 25.7961L18.9544 29.4276C17.2732 31.1089 14.4358 31.287 12.5796 29.4276C10.7203 27.5681 10.8984 24.7336 12.5796 23.0522L16.2107 19.4208C16.3076 19.3239 16.3076 19.1646 16.2107 19.0677L14.967 17.8239C14.92 17.7773 14.8566 17.7512 14.7904 17.7512C14.7243 17.7512 14.6609 17.7773 14.6139 17.8239L10.9827 21.4553C8.33908 24.0992 8.33908 28.3775 10.9827 31.0183C13.6264 33.659 17.9044 33.6621 20.5449 31.0183L24.1761 27.3868C24.2729 27.29 24.2729 27.1306 24.1761 27.0337L22.9386 25.7961ZM31.0196 10.9829C28.3759 8.33903 24.0979 8.33903 21.4574 10.9829L17.8232 14.6143C17.7766 14.6613 17.7505 14.7248 17.7505 14.7909C17.7505 14.857 17.7766 14.9205 17.8232 14.9675L19.0637 16.2082C19.1606 16.305 19.32 16.305 19.4168 16.2082L23.048 12.5767C24.7292 10.8954 27.5666 10.7173 29.4228 12.5767C31.2821 14.4362 31.104 17.2707 29.4228 18.952L25.7916 22.5835C25.7451 22.6305 25.719 22.6939 25.719 22.76C25.719 22.8262 25.7451 22.8896 25.7916 22.9366L27.0354 24.1804C27.1322 24.2773 27.2916 24.2773 27.3885 24.1804L31.0196 20.549C33.6601 17.9051 33.6601 13.6268 31.0196 10.9829ZM24.0667 16.6363C24.0197 16.5898 23.9563 16.5637 23.8901 16.5637C23.824 16.5637 23.7606 16.5898 23.7136 16.6363L16.6357 23.7117C16.5892 23.7586 16.5631 23.8221 16.5631 23.8882C16.5631 23.9544 16.5892 24.0178 16.6357 24.0648L17.8731 25.3024C17.97 25.3992 18.1294 25.3992 18.2263 25.3024L25.301 18.227C25.3979 18.1301 25.3979 17.9707 25.301 17.8739L24.0667 16.6363Z"
                fill="#333333"
              />
            </svg>
            <FacebookShareButton
              url={`https://techsapien.org/blog/${data.mdx.frontmatter.slug}`}
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0012 8.50258C14.0987 8.50258 8.50244 14.0988 8.50244 21.0013C8.50244 27.2388 13.0724 32.4088 19.0487 33.3501V24.6151H15.8737V21.0013H19.0487V18.2476C19.0487 15.1126 20.9149 13.3838 23.7687 13.3838C25.1362 13.3838 26.5687 13.6276 26.5687 13.6276V16.7013H24.9887C23.4387 16.7013 22.9537 17.6663 22.9537 18.6551V20.9988H26.4174L25.8637 24.6126H22.9537V33.3476C28.9299 32.4113 33.4999 27.2401 33.4999 21.0013C33.4999 14.0988 27.9037 8.50258 21.0012 8.50258Z"
                  fill="#333333"
                />
                <circle cx="21" cy="21" r="20.5" stroke="black" />
              </svg>
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://techsapien.org/blog/${data.mdx.frontmatter.slug}`}
              title={data.mdx.frontmatter.title}
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.125 13.5L31.3125 13.9688L33.1875 11.625L29.9062 12.5625C25.6875 7.87505 19.125 13.0313 21 17.25C13.5 17.25 9.75 11.625 9.75 11.625C9.75 11.625 6.9375 15.8438 11.625 19.125L8.8125 18.1875C8.8125 21 10.6875 22.875 13.9688 23.8125H10.6875C12.5625 27.5625 15.8438 27.5626 15.8438 27.5626C15.8438 27.5626 13.0312 29.9063 7.875 29.9063C23.3438 37.4063 32.7188 23.3438 31.3125 15.8438L34.125 13.5Z"
                  fill="#333333"
                />
                <circle cx="21" cy="21" r="20.5" stroke="black" />
              </svg>
            </TwitterShareButton>
          </div>
          <div></div>
        </div>
      </PostHeader>
      <Post>
        {console.log(data.mdx.tableOfContents.items)}
        {data.mdx.tableOfContents.items && (
          <TableOfContents post={data.mdx.tableOfContents} />
        )}
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </>
  )
}

export default singlePost
export const PageQuery = graphql`
  query SinglePostsQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      tableOfContents
      frontmatter {
        date
        excerpt
        slug
        title
        category
        featureImage {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      timeToRead
    }
  }
`

const StyledImg = styled(Img)`
  width: 100px;
`
