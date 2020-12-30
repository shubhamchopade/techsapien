import React from "react"
import styled from "styled-components"

export const FEDCourse = () => {
  return (
    <FEDContainer>
      <h1>Frontend developer roadmap</h1>
    </FEDContainer>
  )
}

const FEDContainer = styled.section`
  color: ${props => props.theme.colors.textMain};
  h1 {
    text-align: center;
  }
`
