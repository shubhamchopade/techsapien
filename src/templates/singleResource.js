import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import styled from "styled-components"

const singleResource = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  return (
    <>
      <ResourceContainer>
        <div className="head-wrapper">
          <StyledImg fixed={featureImage} />
          <div>
            <h1>{data.mdx.frontmatter.title}</h1>
            <p>RESOURCES</p>
          </div>
        </div>
        <ResourceStyles>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </ResourceStyles>
      </ResourceContainer>
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

const ResourceContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;

  .head-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: ${props => props.theme.text.main};

    h1 {
      text-align: center;
      font-size: 5rem;
    }

    p {
      line-height: 0;
      font-size: 1.5rem;
    }
  }
`

export const ResourceStyles = styled.main`
  max-width: 40rem;
  margin: 0 auto;
  z-index: 10;
  font-family: ${props => props.theme.fonts.blog};
`
