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
import {
  SVGBackgroundColor,
  SVGBackgroundFont,
} from "../components/landing/SVGBackground"
import SEO from "../components/seo/SEO"

const index = () => {
  return (
    <Landing>
      <SEO
        pageMeta={{
          title: "Home",
          keywords: ["home", "home", "home"],
          description: "Best frontend developer code snippets and tips.",
        }}
      />
      <img className="bg-blob" src={blob} />
      <img className="bg-dots" src={dots} />
      <SVGBackgroundColor />
      <SVGBackgroundFont />
      <HeroWrapper>
        <HeroText>
          <h1>
            TECH<span>SAPIEN</span>
          </h1>
          <h2>development • productivity • motivation</h2>
          <p>
            I’m Shubham a front-end developer. Find some handy CSS, JavaScript
            tutorials along with the best resources to get started with
            front-end development!{" "}
            <Link to="/blog" className="get-started">
              Get Started Now{" "}
              <svg
                className="arrow"
                width="30"
                height="8"
                viewBox="0 0 30 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3536 4.35355C29.5488 4.15829 29.5488 3.84171 29.3536 3.64645L26.1716 0.464466C25.9763 0.269204 25.6597 0.269204 25.4645 0.464466C25.2692 0.659728 25.2692 0.976311 25.4645 1.17157L28.2929 4L25.4645 6.82843C25.2692 7.02369 25.2692 7.34027 25.4645 7.53553C25.6597 7.7308 25.9763 7.7308 26.1716 7.53553L29.3536 4.35355ZM0 4.5H29V3.5H0V4.5Z"
                  fill="#102A43"
                />
              </svg>
            </Link>
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
