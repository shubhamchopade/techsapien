import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import human from "../../images/1.svg"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  CoursesContainer,
  StyledHeading,
} from "../../elements/hero/HeroElements"

const StyledImg = styled(Img)`
  width: 50%;
  max-width: 30rem;
  margin-left: auto;
  border-top-right-radius: 2rem;
`

const LatestCourses = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        limit: 1
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { posttype: { eq: "course" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              excerpt
              slug
              category
              color
              description
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
    <>
      <StyledHeading margin="5rem 0 0 0">COURSES</StyledHeading>
      {data.allMdx.edges.map(edge => (
        <CoursesContainer color={edge.node.frontmatter.color}>
          <Link to={`/course/${edge.node.frontmatter.slug}`}>
            <div>
              <p className="course-type">career</p>
              <h1>{edge.node.frontmatter.title}</h1>
              <p className="course-description">
                {edge.node.frontmatter.description}
              </p>
            </div>
          </Link>
          <StyledImg
            fixed={
              edge.node.frontmatter.featureImage
                ? edge.node.frontmatter.featureImage.childImageSharp.fixed
                : human
            }
          />
        </CoursesContainer>
      ))}
    </>
  )
}

export default LatestCourses
