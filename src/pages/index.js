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

const index = () => {
  return (
    <Landing>
      <HeroWrapper>
        <img src={dots} />
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
          <img src={blob} />
        </HeroText>
        <HeroLatestPost />
      </HeroWrapper>

      <StyledHeading margin="10rem 0 3rem 0">COURSES</StyledHeading>
      <Link to="/course/frontend-development-roadmap">
        <CoursesContainer>
          <div>
            <p>career</p>
            <h1>Frontend development roadmap</h1>
          </div>
          <img src={frontendRoadmap} />
        </CoursesContainer>
      </Link>

      <BlogSliderContainer>
        <img src={blob2} />
        <div>
          <StyledHeading>BLOG</StyledHeading>
          <BlogSlider />
        </div>
      </BlogSliderContainer>

      <StyledHeading>RESOURCES</StyledHeading>
      <ResourcesContainer>
        <ResourcePill color="#f2c94c">
          HTML <img src={arrow} />
        </ResourcePill>
        <ResourcePill color="#6fcf97">
          CSS <img src={arrow} />
        </ResourcePill>
        <ResourcePill color="#bb6bd9">
          JAVASCRIPT <img src={arrow} />
        </ResourcePill>
        <ResourcePill color="#BDBDBD">
          UI/UX <img src={arrow} />
        </ResourcePill>
        <ResourcePill color="#56ccf2">
          REACT <img src={arrow} />
        </ResourcePill>
        <ResourcePill color="#F2994A">
          FIREBASE <img src={arrow} />
        </ResourcePill>
        <ResourcePill color="#EB5757">
          COLORS <img src={arrow} />
        </ResourcePill>
        <ResourcePill color="#27AE60">
          BOOKS <img src={arrow} />
        </ResourcePill>
      </ResourcesContainer>
    </Landing>
  )
}

export default index
