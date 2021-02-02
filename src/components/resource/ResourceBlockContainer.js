import React from "react"
import styled from "styled-components"
import { ResourceBlock } from "./ResourceBlock"

export const ResourceBlockContainer = ({ text, children }) => {
  return (
    <Container>
      {text.map(a => (
        <ResourceBlock text={a} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-items: space-around;
  align-items: center;

  p {
    margin: 0;
    padding: 1rem;
    color: ${props => props.theme.text.main};
  }
`
