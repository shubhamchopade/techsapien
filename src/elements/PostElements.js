import { Link } from "gatsby"
import styled from "styled-components"

export const PostHeader = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  padding-bottom: 2rem;
  background: ${props => props.theme.bg.main};
  max-height: 40rem;
  min-height: 30rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: ${props => props.theme.text.main};
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  div {
    position: relative;
    z-index: 2;
    background-color: transparent;
    .blog-category {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 600;
      color: ${props => {
        switch (props.color) {
          case "development":
            return props.theme.pill.development
          case "motivation":
            return props.theme.pill.motivation
          case "productivity":
            return props.theme.pill.productivity
          default:
            return props.theme.pill.default
        }
      }};
    }

    h1 {
      font-size: 3rem;
      font-family: ${props => props.theme.fontFamily.heading};

      @media ${props => props.theme.breakpoints.mobile} {
        font-size: 2rem;
      }
    }

    div {
      display: flex;
      justify-content: space-around;
      max-width: 20rem;
      margin: 0 auto;
      align-items: center;

      p {
        font-size: 1rem;
        font-weight: 600;
      }

      svg {
        margin: 2rem 0 0 0;

        &:hover {
          filter: invert(50%);
          cursor: pointer;
        }
        path {
          fill: ${props => props.theme.text.main};
        }

        circle {
          stroke: ${props => props.theme.text.main};
        }
      }
    }
  }
`

export const PostWrapper = styled.main`
  max-width: 40rem;
  width: 90%;
  margin: 0 auto;
  z-index: 10;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.text.main};
    font-family: ${props => props.theme.fontFamily.heading};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }
  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
    color: ${props => props.theme.text.main};
    margin-top: 2rem;
    font-family: ${props => props.theme.fontFamily.paragraph};
  }

  a {
    color: ${props => props.theme.text.main};
    text-decoration: underline;
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    text-decoration: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
    padding: 2rem;
    border-left: 10px solid #ccc;
  }
  ul,
  ol {
    color: ${props => props.theme.text.main};
    margin: 1rem 0 1rem 2rem;
  }
  li {
    margin: 0.25rem 0;
  }

  pre {
    font-family: ${props => props.theme.fonts.code};
    font-size: 0.875rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    line-height: 1.875rem;
    color: ${props => props.theme.text.main};
    background-color: ${props => props.theme.bg.main};
    padding: 1rem;
  }

  code {
    background-color: #d1e9f0;
    color: #0f272e;
    padding: 0.3rem;
    border-radius: 0.2rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.bg.main};
    opacity: 0.1;
    margin: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  th {
    width: 100%;
  }
  img {
    width: 100%;
  }
`

export const PostNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.text.main};
  max-width: 1000px;
  margin: 2rem auto;
`

export const PostNavLink = styled(Link)`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  border: 2px solid;
  border-color: ${props => {
    switch (props.color) {
      case "development":
        return props.theme.pill.development
      case "motivation":
        return props.theme.pill.motivation
      case "productivity":
        return props.theme.pill.productivity
      default:
        return props.theme.pill.default
    }
  }};

  p {
    transition: 1s;
  }

  &:hover {
    p {
      transform: translateX(-5px);
    }
  }
`
