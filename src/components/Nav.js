import {
  LogoLink,
  NavWrapper,
  StyledLink,
  LinksContainer,
  Toggle,
} from "../elements"
import React, { useContext } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { DarkContext } from "../store/context"

export const Nav = () => {
  const [isDark, setIsDark] = useContext(DarkContext)

  function handleToggle() {
    if (isDark === "dark") {
      setIsDark("light")
    }
    if (isDark === "light") {
      setIsDark("dark")
    }
  }
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "header.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <NavWrapper>
      <LogoLink to="/">
        <img src={data.logo.publicURL} alt="Logo"></img>
        <h1>
          TECH<span>SAPIEN</span>
        </h1>
      </LogoLink>
      <LinksContainer>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/course">Courses</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/resource">Resources</StyledLink>
      </LinksContainer>

      <Toggle onClick={handleToggle}>{isDark === "dark" ? "🌑" : "🌞"}</Toggle>
    </NavWrapper>
  )
}
