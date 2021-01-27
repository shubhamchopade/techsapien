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
                width="42"
                height="16"
                viewBox="0 0 42 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-1.13898"
                    y1="8.32"
                    x2="-0.905617"
                    y2="11.63"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2298BD" />
                    <stop offset="1" stop-color="#0ED7B5" />
                  </linearGradient>
                </defs>
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
