import React, { useContext } from "react"
import styled from "styled-components"
import { GithubContext } from "../../store/context"
import awesomeList from "../../data/awesome-resources.md"
import ReactMarkdown from "react-markdown"

const GetMarkDownData = () => {
  console.log(String(awesomeList))
  const { singleCategory } = useContext(GithubContext)

  //   const pgmingLangData = getCategoryString("## Programming Languages")
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

  return (
    <Wrapper>
      <ReactMarkdown></ReactMarkdown>
      {singleCategory.map((category, index) => (
        <StyledBlock key={index} href={category.link} target="__blank">
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

const StyledBlock = styled.a`
  color: ${props => props.theme.text.main};
  margin: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.bg.secondary};
  border-radius: 0.5rem;
  filter: drop-shadow(${props => props.theme.shadows.shadow1});
`
