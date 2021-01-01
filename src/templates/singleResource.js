import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, P, PostHeader } from "../elements"
import { Container, Post, FeatureImage } from "../components"
import Img from "gatsby-image"
import styled from "styled-components"

const singleResource = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  const formatDate = dateString => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleString(undefined, options)
  }

  return (
    <>
      <StyledImg fixed={featureImage} />
      <div>
        <h1>{data.mdx.frontmatter.title}</h1>
        <div>
          <p>{formatDate(data.mdx.frontmatter.date)}</p>
          <p>{data.mdx.timeToRead} min read</p>
        </div>
        <div></div>
      </div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </>
  )
}

export default singleResource

export const PageQuery = graphql`
  query SingleResourceQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        slug
        title
        posttype
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
