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
    color: ${props => props.theme.colors.textMain};

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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.dark1};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }
  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
    color: ${props => props.theme.colors.dark2};
    margin-top: 2rem;
  }

  a {
    color: ${props => props.theme.colors.main1};
    text-decoration: underline;
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    text-decoration: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }
  ul,
  ol {
    color: ${props => props.theme.colors.dark2};
    margin: 1rem 0 1rem 2rem;
  }
  li {
    margin: 0.25rem 0;
  }

  pre {
    font-family: ${props => props.theme.fonts.code};
    font-size: 0.875rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    line-height: 1.875rem;
    color: ${props => props.theme.colors.light1};
    background-color: ${props => props.theme.colors.dark3};
    padding: 1rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.colors.dark1};
    opacity: 0.1;
    margin: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  th {
    width: 100%;
  }
`
