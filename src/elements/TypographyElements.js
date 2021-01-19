import styled from "styled-components"

export const P = styled.p`
  margin: ${props => (props.margin ? props.margin : 0)};
  text-align: ${props => (props.align ? props.align : "left")};
  text-transform: ${props => (props.transform ? props.transform : "")};
  font-size: ${props => {
    switch (props.size) {
      case "medium":
        return "1.125rem"
      case "small":
        return "1rem"
      case "xSmall":
        return "0.875rem"
      default:
        return "0.875rem"
    }
  }};
  line-height: ${props => {
    switch (props.size) {
      case "medium":
        return "1.4375rem"
      case "small":
        return "1.375rem"
      case "xSmall":
        return "1.125rem"
      default:
        return "1.4375em"
    }
  }};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};

  font-weight: ${props => {
    switch (props.weight) {
      case "normal":
        return 400
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  color: ${props => props.theme.text.main};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`

export const H1 = styled.h1`
  margin: ${props => (props.margin ? props.margin : 0)};
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 400;
  color: ${props => props.theme.text.main};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`
export const H2 = styled.h2`
  margin: ${props => (props.margin ? props.margin : 0)};
  font-size: 1.5rem;
  line-height: 1.875rem;
  font-weight: 400;
  color: ${props => props.theme.text.main};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`
