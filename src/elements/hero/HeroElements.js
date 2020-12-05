import styled from "styled-components"

export const HeroWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  color: ${props => props.theme.colors.textMain};
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
`
