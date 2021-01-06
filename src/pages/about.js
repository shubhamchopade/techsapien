import React from "react"
import styled from "styled-components"
import shubham from "../images/shubham.png"
import { useStaticQuery, Link, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "shubham.png" }) {
        publicURL
      }
    }
  `)
  return (
    <AboutContainer>
      <h1>About</h1>
      <div className="wrapper">
        <p>
          Tech sapien is a community targeted towards the programmers who strive
          for efficiency. The mind behind tech sapien is Shubham Chopade. He is
          a motivated individual whose passion is teaching. Having completed his
          Bachelor's degree in Electronics and Telecommunication, he is out here
          teaching web development. His ultimate target from this website is to
          help coders evolve.
        </p>
        <img src={data.image.publicURL} />
      </div>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.main`
  max-width: 1000px;
  margin: 1rem auto;
  color: ${props => props.theme.colors.textMain};

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 0.2rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    p {
      max-width: 500px;
    }

    img {
      width: 20rem;
      border-radius: 100%;

      @media (max-width: 768px) {
        margin-top: 2rem;
      }
    }
  }
`
