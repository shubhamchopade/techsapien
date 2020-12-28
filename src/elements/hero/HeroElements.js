import styled from "styled-components"

export const Landing = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`

export const HeroWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  color: ${props => props.theme.colors.textMain};
  height: 80vh;
  max-height: 500px;
  position: relative;

  margin: 0 auto;

  img {
    position: absolute;
    top: 50px;
    left: 0;
    user-select: none;
  }
`

export const HeroText = styled.section`
  max-width: 30rem;
  margin: 0 auto;

  h1 {
    font-size: 5rem;
    font-weight: normal;
    line-height: 100%;

    span {
      font-weight: bold;
    }
  }
  h2 {
    line-height: 100%;
    font-weight: normal;
    font-size: 1.5rem;
  }

  p {
    margin: 3rem 0 0 0;
    line-height: 200%;
    font-size: 1rem;
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    user-select: none;
    z-index: -1;
  }
`

export const StyledHeading = styled.h1`
  color: ${props => props.theme.colors.textMain};
  font-size: 25px;
  text-align: center;
  margin: 30px 0;
`

export const CoursesContainer = styled.section`
  display: flex;
  align-items: center;
  border-radius: 2rem;
  color: ${props => props.theme.colors.textMain};
  background-color: #b1c2fd;
  position: relative;

  div {
    margin: 0 auto;
    p {
      text-transform: uppercase;
      font-size: 0.8 rem;
      font-weight: bold;
    }
    h1 {
      font-weight: 700;
      font-size: 3rem;
      line-height: 100%;
      max-width: 15rem;
    }
  }

  img {
    width: 50%;
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
    top: -40px;
    right: 0;
    user-select: none;
    z-index: -1;
  }
`
export const ResourcesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ResourcePill = styled.section`
  padding: 1rem;
  margin: 1rem;
  font-size: 1.2rem;
  background-color: ${props => (props.color ? props.color : "#f123da")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  font-weight: 700;

  img {
    padding-left: 2rem;
    width: 100%;
  }
`
