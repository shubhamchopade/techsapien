import React from "react"
import HeroLatestPost from "../components/HeroLatestPost"
import {
  Landing,
  BlogSliderContainer,
  CoursesContainer,
  HeroText,
  HeroWrapper,
  StyledHeading,
  ResourcesContainer,
  ResourcePill,
} from "../elements/hero/HeroElements"
import dots from "../images/bgDots.svg"
import blob from "../images/bgBlob.svg"
import blob2 from "../images/bgBlob2.svg"
import arrow from "../images/arrow.svg"
import frontendRoadmap from "../images/frontend-cover.svg"
import { BlogSlider } from "../components/landing/BlogSlider"
import { Link } from "gatsby"
import LatestCourses from "../components/course/LatestCourses"
import AllResources from "../components/resource/AllResources"

const index = () => {
  return (
    <Landing>
      <img className="bg-blob" src={blob} />
      <img className="bg-dots" src={dots} />
      <HeroWrapper>
        <HeroText>
          <h1>
            TECH<span>SAPIEN</span>
          </h1>
          <h2>development • productivity • motivation</h2>
          <p>
            I’m Shubham a front-end developer. Find some handy CSS, JavaScript
            tutorials along with the best resources to get started with
            front-end development! Get Started Now
          </p>
        </HeroText>
        <HeroLatestPost />
      </HeroWrapper>

      <LatestCourses />

      <BlogSliderContainer>
        <img src={blob2} />
        <div>
          <StyledHeading>BLOGS</StyledHeading>
          <BlogSlider />
        </div>
      </BlogSliderContainer>

      <StyledHeading>RESOURCES</StyledHeading>
      <ResourcesContainer>
        <AllResources />
      </ResourcesContainer>
    </Landing>
  )
}

export default index
