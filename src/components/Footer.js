import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://www.facebook.com/techsapien10/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={data.facebook.publicURL} alt="facebook logo" />
          </a>
          <a
            href="https://instagram.com/tech.sapien"
            rel="noreferrer"
            target="_blank"
          >
            <img src={data.instagram.publicURL} alt="instagram logo" />
          </a>
          <a
            href="https://twitter.com/chopadeshubham4"
            rel="noreferrer"
            target="_blank"
          >
            <img src={data.twitter.publicURL} alt="twitter logo" />
          </a>
        </FooterSocialIcons>
        <P>
          Developed and Designed by{" "}
          <a href="https://shubhamchopade.com" target="_blank" rel="noreferrer">
            Shubham Chopade
          </a>
          . <br /> &#169; {new Date().getFullYear()} All rights reserved.
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
