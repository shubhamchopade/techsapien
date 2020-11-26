import { NavWrapper } from "../elements"
import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export const Nav = () => {
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
    </NavWrapper>
  )
}
