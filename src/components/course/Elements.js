import styled from "styled-components"

export const CourseWrapper = styled.main`
  max-width: 80%;
  margin: 0 auto;

  .container {
    color: ${props => props.theme.text.main};
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70vh;
  }

  .link {
    text-decoration: underline;
  }
`
