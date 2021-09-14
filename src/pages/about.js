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
        Tech Sapien is a blog focused on providing the best knowledge on web development. A platform where you can find tips and tricks related to web development. Find the React and Javascript concepts explained with code snippets and live examples. Additionally, I am also working on adding these 2  amazing sections — Courses and Resources. Courses will be a series of interactive content explaining the concepts in Technology. The topics covered will cover Flexbox, Grid, API,   Tech Sapien is also a collection of the famous "awesome resources". A curated and awesome lists about all kinds of interesting topics. The feature is still in progress.
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
