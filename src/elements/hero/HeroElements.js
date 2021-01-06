import styled from "styled-components"

export const Landing = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.bgMain};
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

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
    width: 100%;
  }
`

export const StyledHeading = styled.h1`
  color: ${props => props.theme.colors.textMain};
  font-size: 25px;
  text-align: center;
  margin: ${props => (props.margin ? props.margin : "30px 0")};
`

export const CoursesContainer = styled.section`
  display: flex;
  align-items: center;
  border-radius: 2rem;
  margin: 0 auto 8rem auto;
  color: ${props => props.theme.colors.textMain};
  background-color: #b1c2fd;
  position: relative;
  max-width: 80%;
  cursor: pointer;

  &:hover {
    h1 {
      filter: brightness(20%);
    }

    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
  }

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
  color: ${props => props.theme.colors.textMain};

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
