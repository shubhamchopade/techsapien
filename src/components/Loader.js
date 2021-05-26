import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

export const Loader = () => {
  const svgVariants = {
    hidden: {},
    visible: {
      transition: { duration: 2 },
    },
  }
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2 },
    },
  }
  const pathVariants1 = {
    hidden: { fill: "none", opacity: 0 },
    visible: {
      transition: { delay: 2, duration: 2 },
      fill: "url(#paint2_linear)",
      opacity: 1,
    },
  }
  const circleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
  }
  const circleVariants1 = {
    hidden: { r: 0 },
    visible: {
      r: 22.5,
      transition: { delay: 2, duration: 1 },
    },
  }

  return (
    <Container
      key="child"
      exit={{ y: 1000 }}
      id="___loader"
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        overflow: "hidden",
      }}
    >
      <motion.svg
        width="368"
        height="368"
        viewBox="0 0 368 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="184"
          cy="184"
          r="184"
          fill="#F7F7F7"
          variants={circleVariants}
        />
        <motion.circle
          cx="214.5"
          cy="188.5"
          r="22.5"
          fill="url(#paint0_linear)"
          variants={circleVariants1}
        />
        <motion.path
          d="M182.862 152.493L149.945 190.539C137.703 208.746 117.543 232.955 173.039 230.998C242.41 228.552 246.763 254.641 220.92 293.501C206.955 314.499 200.974 324.034 198.87 327.732C198.598 328.387 198.33 329.025 198.067 329.644C197.743 329.938 197.859 329.509 198.87 327.732C208.007 305.766 222.237 264.419 211.67 260.619C200.788 256.706 152.365 262.25 129.514 265.511C89.6135 274.026 47.4641 254.749 198.067 109.525C348.67 -35.7 245.613 73.3228 182.862 152.493Z"
          fill="url(#paint1_linear)"
          variants={pathVariants1}
        />
        <motion.path
          d="M182.862 152.493L149.945 190.539C137.703 208.746 117.543 232.955 173.039 230.998C242.41 228.552 246.763 254.641 220.92 293.501C200.244 324.59 197.07 330.55 198.067 329.644C207.136 308.267 222.553 264.533 211.67 260.619C200.788 256.706 152.365 262.25 129.514 265.511C89.6135 274.026 47.4641 254.749 198.067 109.525C348.67 -35.7 245.613 73.3228 182.862 152.493Z"
          stroke="url(#paint2_linear)"
          variants={pathVariants}
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="190.75"
            y1="180.4"
            x2="237"
            y2="196.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2298BD" />
            <stop offset="1" stop-color="#0ED7B5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="184"
            y1="38.2734"
            x2="184"
            y2="329.729"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0F2027" />
            <stop offset="0.526042" stop-color="#2C5364" />
            <stop offset="1" stop-color="#203A43" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="184"
            y1="38.2734"
            x2="184"
            y2="329.729"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0F2027" />
            <stop offset="0.526042" stop-color="#2C5364" />
            <stop offset="1" stop-color="#203A43" />
          </linearGradient>
        </defs>
      </motion.svg>
    </Container>
  )
}

const Container = styled(motion.div)`
  background-color: ${props => props.theme.bg.main};
  ::-webkit-scrollbar {
    display: none;
  }
`
