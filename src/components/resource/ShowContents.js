import React from "react"
import styled from "styled-components"

const ShowContents = props => {
  const { repoHeadings } = props
  // console.log(repoHeadings)
  return (
    <SideTray>
      {repoHeadings.map((heading, index) => (
        <p key={index}>{heading}</p>
      ))}
    </SideTray>
  )
}

export default ShowContents

const SideTray = styled.main`
  width: 10rem;
  background-color: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.text.secondary};
  font-size: 0.8rem;
  padding: 1rem;
  overflow-y: auto;
  position: sticky;
  top: 35px;
  left: 0;
  height: 70vh;
`
