import { NavWrapper } from "../elements"
import React, { useContext } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { DarkContext } from "../store/context"
import { Button } from "./Button"

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
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="Logo"></img>
      </Link>
      <button onClick={handleToggle}>dark</button>
    </NavWrapper>
  )
}
