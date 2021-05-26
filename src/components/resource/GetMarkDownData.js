import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import useGetCategoryObject from "../../hooks/useGetCategoryObject"

const GetMarkDownData = () => {
  const singleCategory = useGetCategoryObject("## Programming Languages")
  console.log(singleCategory)
  //   const csData = getCategoryString("## Computer Science")
  //   console.log(singleCategory)
  //   const platformData = getCategoryString("## Platforms")
  //   const frontendData = getCategoryString("## Front-End Development")
  //   const backendData = getCategoryString("## Back-End Development")
  //   const bigData = getCategoryString("## Big Data")
  //   const theoryData = getCategoryString("## Theory")
  //   const booksData = getCategoryString("## Books")
  //   const editorsData = getCategoryString("## Editors")
  //   const gamingData = getCategoryString("## Gaming")
  //   const devEnvData = getCategoryString("## Development Environment")
  //   const entertainmentData = getCategoryString("## Entertainment")
  //   const databaseData = getCategoryString("## Databases")
  //   const mediaData = getCategoryString("## Media")
  //   const learnData = getCategoryString("## Learn")
  //   const securityData = getCategoryString("## Security")
  //   const cmsData = getCategoryString("## Content Management Systems")
  //   const hardwareData = getCategoryString("## Hardware")
  //   const businessData = getCategoryString("## Business")
  //   const workData = getCategoryString("## Work")
  //   const networkingData = getCategoryString("## Networking")
  //   const decentralizedData = getCategoryString("## Decentralized Systems")
  //   const higherEducationData = getCategoryString("## Higher Education")
  //   const eventsData = getCategoryString("## Events")
  //   const testingData = getCategoryString("## Testing")
  //   const miscData = getCategoryString("## Miscellaneous")
  //   const relatedData = getCategoryString("## Related")

  const getNameAndOwner = category => {
    const link = category.link
    // const re = /\s*(?:;|$)\s*/
    const nameList = link.split("/", 5)
    const owner = nameList[3]
    const name = nameList[4].split("#")[0]
    console.log({ name, owner, link })
  }

  return (
    <Wrapper>
      <ReactMarkdown></ReactMarkdown>
      {singleCategory.singleCategory.map((category, index) => (
        <StyledBlock onClick={() => getNameAndOwner(category)} key={index}>
          {category.title}
        </StyledBlock>
      ))}
    </Wrapper>
  )
}

export default GetMarkDownData

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledBlock = styled.div`
  color: ${props => props.theme.text.main};
  margin: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.bg.secondary};
  border-radius: 0.5rem;
  filter: drop-shadow(${props => props.theme.shadows.shadow1});
`
