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
            target="_blank"
            rel="noereferrer"
          >
            <img src={data.facebook.publicURL} alt="facebook logo" />
          </a>
          <a
            href="https://instagram.com/tech.sapien"
            target="_blank"
            rel="noereferrer"
          >
            <img src={data.instagram.publicURL} alt="instagram logo" />
          </a>
          <a
            href="https://twitter.com/chopadeshubham4"
            target="_blank"
            rel="noereferrer"
          >
            <img src={data.twitter.publicURL} alt="twitter logo" />
          </a>
        </FooterSocialIcons>
        <P>
          Developed and Designed by{" "}
          <a href="https://shubhamchopade.ml" target="_blank" no>
            Shubham Chopade
          </a>
          . <br /> &#169; {new Date().getFullYear()} All rights reserved.
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
