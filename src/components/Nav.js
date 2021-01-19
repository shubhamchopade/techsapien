import {
  LogoLink,
  NavWrapper,
  StyledLink,
  LinksContainer,
  Toggle,
  ThemeSwitcher,
} from "../elements"
import React, { useContext, useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { DarkContext } from "../store/context"

export const Nav = () => {
  const [isDark, setIsDark, isSans, setIsSans] = useContext(DarkContext)
  const [count, setCount] = useState(1)
  const handleTheme = () => {
    const modes = ["dark", "light", "warm"]
    if (count < 3) {
      setCount(prev => prev + 1)
      setIsDark(modes[count])
    } else {
      setCount(1)
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

      <div className="theme-elements">
        <Toggle isSans={isSans} onClick={() => setIsSans(prev => !prev)}>
          {!isSans ? "Sans" : "Serif"}
        </Toggle>
        <ThemeSwitcher isDark={isDark} onClick={handleTheme}></ThemeSwitcher>
      </div>
    </NavWrapper>
  )
}
