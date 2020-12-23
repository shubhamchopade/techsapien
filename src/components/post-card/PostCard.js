import React from "react"
import human from "./1.svg"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const PostCard = ({
  topText,
  pill,
  image,
  title,
  description,
  link,
}) => {
  return (
    <PostCardWrapper>
      <TopText>{title}</TopText>
      <Pill>{pill}</Pill>
      <BannerContainer>
        <StyledImg fixed={image ? image : human} />
        <Banner>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <StyledLink>Learn more</StyledLink>
        </Banner>
      </BannerContainer>
    </PostCardWrapper>
  )
}

const PostCardWrapper = styled.div`
  height: 300px;
  width: 300px;
  background-color: ${props => props.theme.colors.bgMain};
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
`
const TopText = styled.h1`
  font-size: 5rem;
  font-family: ${props => props.theme.fonts.main};
  background: linear-gradient(109.08deg, #2298bd 6.16%, #0ed7b5 91.66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translate(0, -2.5rem);
  font-weight: 900;
  opacity: 0.08;
  position: absolute;
  width: 500%;
  text-transform: uppercase;
`
const Pill = styled.span`
  font-size: 0.8rem;
  padding: 0.1rem 1rem;
  background-color: ${props => props.theme.colors.pill.development};
  color: #fff;
  font-weight: 600;
  border-radius: 3rem;
  position: absolute;
  top: 1rem;
  left: -0.5rem;
`
const BannerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 290px;
  margin: 0 auto;
`

const StyledImg = styled(Img)`
  position: absolute;
  transform: translate(-1rem, 3rem);
`
const Banner = styled.div`
  width: 200px;
`

const Title = styled.h2`
  color: ${props => props.theme.colors.textMain};
  font-size: 1rem;
  font-weight: bold;
  line-height: 1rem;
  width: 100%;
`

const Description = styled.p`
  color: ${props => props.theme.colors.textMain};
  margin: 0.5rem 0;
  font-size: 0.5rem;
  width: 100%;
`

const StyledLink = styled(Link)`
  background: -webkit-linear-gradient(109.08deg, #2298bd 6.16%, #0ed7b5 91.66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 0.6rem;
`
