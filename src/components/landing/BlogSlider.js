import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { PostCard } from "../post-card/PostCard"
import human from "../../images/1.svg"
import styled from "styled-components"

const Slider = styled.section`
  display: flex;
  margin: 0 auto;
  overflow-x: scroll;
  position: relative;

  ::-webkit-scrollbar {
    height: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #b2ece1;
    border-radius: 10px;
    filter: brightness(50%);

    &:hover {
      background: #6cdac6;
    }
    &:active {
      background: #31c4a9;
    }
  }
`

export const BlogSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        limit: 5
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { posttype: { eq: "blog" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              excerpt
              slug
              category
              featureImage {
                childImageSharp {
                  fixed(fit: CONTAIN, width: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            id
          }
        }
      }
    }
  `)
  return (
    <Slider>
      {data.allMdx.edges.map((edge, idx) => (
        <PostCard
          key={idx}
          topText={edge.node.frontmatter.title}
          pill={edge.node.frontmatter.category}
          title={edge.node.frontmatter.title}
          image={
            edge.node.frontmatter.featureImage !== null
              ? edge.node.frontmatter.featureImage.childImageSharp.fixed
              : human
          }
          description={edge.node.frontmatter.excerpt}
          margin="0"
          slug={edge.node.frontmatter.slug}
        />
      ))}
    </Slider>
  )
}
