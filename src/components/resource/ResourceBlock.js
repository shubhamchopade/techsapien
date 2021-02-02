import React from "react"
import styled from "styled-components"

export const ResourceBlock = ({ text }) => {
  return (
    <StyledDiv>
      <a href={text.link}>
        <p>{text.title}</p>
      </a>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  border-radius: 1rem;
  width: 15rem;
  background-color: ${props => props.theme.bg.neutral};
  margin: 1rem;

  p {
    margin: 0;
    padding: 1rem;
    color: ${props => props.theme.text.main};
  }
`
