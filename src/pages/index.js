import React from "react"
import HeroLatestPost from "../components/HeroLatestPost"
import { HeroText, HeroWrapper } from "../elements/hero/HeroElements"
import dots from "../images/bgDots.svg"
import blob from "../images/bgBlob.svg"

const index = () => {
  return (
    <HeroWrapper>
      <HeroText>
        <h1>
          TECH<span>SAPIEN</span>
        </h1>
        <h2>development • productivity • motivation</h2>
        <p>
          I’m Shubham a front-end developer. Find some handy CSS, JavaScript
          tutorials along with the best resources to get started with front-end
          development! Get Started Now
        </p>
        <img src={blob} />
      </HeroText>
      <HeroLatestPost />
    </HeroWrapper>
  )
}

export default index
