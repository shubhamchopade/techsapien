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
            href="https://facebook.com"
            target="_blank"
            rel="noopener noereferrer"
          >
            <img src={data.facebook.publicURL} alt="facebook logo" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noereferrer"
          >
            <img src={data.instagram.publicURL} alt="instagram logo" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noereferrer"
          >
            <img src={data.twitter.publicURL} alt="twitter logo" />
          </a>
        </FooterSocialIcons>
        <P>2020 Company. All rights reserved.</P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
