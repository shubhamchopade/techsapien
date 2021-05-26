import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import SEO from "../components/seo/SEO"

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
      <SEO
        pageMeta={{
          title: "About",
          keywords: ["about"],
          description: "Best frontend developer code snippets and tips.",
        }}
      />
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
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={data.image.publicURL}
        />
      </div>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.main`
  max-width: 1000px;
  margin: 1rem auto;
  color: ${props => props.theme.text.main};

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
      height: 20rem;
      border-radius: 100%;

      @media (max-width: 768px) {
        margin-top: 2rem;
      }
    }
  }
`
