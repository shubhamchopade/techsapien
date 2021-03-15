import { motion } from "framer-motion"
import { Link } from "gatsby"
import styled from "styled-components"

export const Landing = styled(motion.main).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
})`
  max-width: 1600px;
  margin: 0 auto;
  background-color: ${props => props.theme.bg.main};
  position: relative;

  .bg-blob {
    position: absolute;
    top: -50px;
    right: 0;
    margin: 0 auto;
    user-select: none;
    width: 100%;
  }

  .bg-dots {
    position: absolute;
    top: 50px;
    left: 0;
    user-select: none;
    width: 5rem;

    @media (max-width: 1024px) {
      top: 50%;
    }
    @media (max-width: 768px) {
      top: 80%;
    }
  }
`

export const HeroWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  color: ${props => props.theme.text.main};
  position: relative;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const HeroText = styled.section`
  max-width: 30rem;
  margin: 0 auto;
  padding: 0 1rem;

  h1 {
    font-size: 5rem;
    font-weight: normal;
    line-height: 100%;
    font-family: ${props => props.theme.fontFamily.heading};

    @media ${props => props.theme.breakpoints.tablet} {
      margin-top: 3rem;
      font-size: 3.3rem;
    }
    @media ${props => props.theme.breakpoints.mobile} {
      margin-top: 7rem;
      font-size: 2.5rem;
    }

    span {
      font-weight: bold;
    }
  }
  h2 {
    line-height: 100%;
    font-weight: normal;
    font-size: 1.3rem;
    font-family: ${props => props.theme.fontFamily.paragraph};

    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 1rem;
    }
    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 0.8rem;
    }
  }

  p {
    margin: 3rem 0 0 0;
    line-height: 200%;
    font-size: 0.9rem;
    font-family: ${props => props.theme.fontFamily.paragraph};

    .get-started {
      background: -webkit-linear-gradient(
        109.08deg,
        #2298bd 6.16%,
        #0ed7b5 91.66%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;

      .arrow {
        width: 1.5rem;
        margin-left: 0.3rem;
        transition: 0.3s;

        path {
          fill: ${props => props.theme.text.neutral};
        }
      }

      &:hover {
        .arrow {
          transform: translateX(10px);
        }
      }
    }

    .arrow {
      margin-left: 0.3rem;
      width: 2rem;
      transition: 0.3s;
    }

    @media ${props => props.theme.breakpoints.tablet} {
      width: 90%;
    }
  }
`

export const StyledHeading = styled.h1`
  color: ${props => props.theme.text.main};
  font-size: 25px;
  text-align: center;
  margin: ${props => (props.margin ? props.margin : "30px 0")};
`

export const CoursesContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-blend-mode: screen;
  border-radius: 2rem;
  color: ${props => props.theme.text.main};
  background-color: ${props => props.theme.bg.secondary};
  position: relative;
  overflow: hidden;
  max-width: 40rem;
  height: 20rem;
  padding: 2rem;
  margin: 2rem auto;

  @media (max-width: 768px) {
    max-width: 95%;
  }

  &:hover {
    .course-link {
      text-decoration: underline;
    }
  }

  div {
    margin: 1rem;
    width: 80%;

    .course-type {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 0.5rem;
      }
    }

    .course-description {
      margin-top: 2rem;
      font-size: 0.9rem;
    }

    .course-link {
      margin-top: 1rem;
      font-size: 0.9rem;
      text-transform: uppercase;
      font-weight: bold;
    }

    h1 {
      font-weight: 700;
      font-size: 3rem;
      line-height: 100%;
      max-width: 15rem;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }

  img {
    width: 100%;
    max-width: 30rem;
    margin-left: auto;
    border-top-right-radius: 2rem;
  }
`

export const BlogSliderContainer = styled.div`
  position: relative;
  margin: 5rem 0;

  img {
    position: absolute;
    top: -20px;
    width: 100%;
    right: 0;
    user-select: none;
    z-index: -1;
  }
`
export const ResourcesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const ResourcePill = styled(Link)`
  margin: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: ${props => (props.color ? props.color : "#f123da")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  font-weight: 700;
  color: ${props => props.theme.text.main};

  cursor: pointer;

  &:hover {
    img {
      transform: translateX(4px);
    }
  }

  img {
    padding-left: 2rem;
    transform: translateX(0px);
    transition: ease-in-out 0.3s;
    width: 100%;
    filter: invert(100%);
  }
`
