import {
  LogoLink,
  NavWrapper,
  StyledLink,
  LinksContainer,
  ThemeSwitcher,
  FontSwitcher,
  StyledBurger,
  Ul,
} from "../elements"
import React, { useContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { DarkContext } from "../store/context"

export const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger
        open={open}
        onClick={() => {
          if (navigator.vibrate) {
            window.navigator.vibrate(30)
          }
          setOpen(!open)
        }}
      >
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </>
  )
}

export const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <StyledLink onClick={() => setOpen(!open)} to="/about">
        About
      </StyledLink>
      <StyledLink onClick={() => setOpen(!open)} to="/course">
        Courses
      </StyledLink>
      <StyledLink onClick={() => setOpen(!open)} to="/blog">
        Blog
      </StyledLink>
      <StyledLink onClick={() => setOpen(!open)} to="/resource">
        Resources
      </StyledLink>
    </Ul>
  )
}

export const Nav = () => {
  const { isDark, setIsDark, isSans, setIsSans } = useContext(DarkContext)
  const [colorCount, setColorCount] = useState(1)
  const [fontCount, setFontCount] = useState(1)

  const handleTheme = () => {
    const modes = ["dark", "light", "warm"]
    if (colorCount < 3) {
      setColorCount(prev => prev + 1)
      setIsDark(modes[colorCount])
    } else {
      setColorCount(1)
      setIsDark("dark")
    }
  }
  const handleFont = () => {
    const modes = ["sans", "serif", "slab"]
    if (fontCount < 3) {
      setFontCount(prev => prev + 1)
      setIsSans(modes[fontCount])
    } else {
      setFontCount(1)
      setIsSans("sans")
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
      <LinksContainer>
        <Burger />
      </LinksContainer>
      <LogoLink to="/">
        <img src={data.logo.publicURL} alt="Logo"></img>
      </LogoLink>
      <div className="theme-elements">
        <ThemeSwitcher isDark={isDark} onClick={handleTheme}></ThemeSwitcher>
        <FontSwitcher isDark={isDark} isSans={isSans} onClick={handleFont}>
          <svg
            width="21"
            height="36"
            viewBox="0 0 21 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.576 9.32V11.552H8.136V26H5.4V11.552H0.936V9.32H12.576Z"
              fill="#102A43"
            />
            <path
              d="M19.384 14.88V16.368H16.424V26H14.6V16.368H11.624V14.88H19.384Z"
              fill="#102A43"
            />
          </svg>
        </FontSwitcher>
      </div>
    </NavWrapper>
  )
}
