import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import useGetCategoryObject from "../../hooks/useGetCategoryObject"
import useGetRepoDetails from "../../hooks/useGetRepoDetails"
import useGetReadMeFileAsText from "../../hooks/useGetReadMeFileAsText"
import { graphql, useStaticQuery } from "gatsby"
import { PostHeader } from "../../elements/PostElements"
import { MarkdownContainer } from "../../elements"

const GetMarkDownData = () => {
  const data = useStaticQuery(graphql`
    query {
      allGithub {
        nodes {
          heading
          data {
            link
            owner
            repoName
            title
          }
        }
      }
    }
  `)
  const [currentRepo, setCurrentRepo] = useState({
    owner: "",
    repoName: "",
  })
  const repoDetails = useGetRepoDetails(currentRepo, setCurrentRepo)
  const [starCount, setStarCount] = useState(0)
  const [closeModal, setCloseModal] = useState(false)

  const getReadMeFile =
    repoDetails.content &&
    repoDetails.content.filter(a => a.name.toLowerCase() === "readme.md")

  const textResponse = useGetReadMeFileAsText(
    getReadMeFile[0] && getReadMeFile[0].download_url
  )

  useEffect(() => {
    setStarCount(repoDetails.response.stargazers_count)
  }, [repoDetails.response.stargazers_count])

  const allGithubData = data.allGithub.nodes

  console.log(data)

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          {allGithubData.map((c, index) => {
            return (
              <ResourceContainer key={index}>
                <p>{c.heading}</p>
                <ResourceSectionWrapper>
                  {c.data.map((d, idx) => (
                    <StyledBlock
                      key={idx}
                      onClick={() => {
                        setCloseModal(false)
                        setCurrentRepo(d)
                      }}
                    >
                      {d.title}
                    </StyledBlock>
                  ))}
                </ResourceSectionWrapper>
              </ResourceContainer>
            )
          })}
        </div>
        {!closeModal && (
          <MarkdownContainer>
            <button onClick={() => setCloseModal(true)}>close</button>
            {textResponse.status === "LOADING" ? (
              "loading..."
            ) : (
              <>
                <p>{starCount}</p>
                <ReactMarkdown children={textResponse.response} />
              </>
            )}
          </MarkdownContainer>
        )}
      </div>
    </>
  )
}

export default GetMarkDownData

const ResourceContainer = styled.section`
  margin: 2rem auto;
  max-width: 70rem;
  padding: 0 2rem;

  p {
    color: ${props => props.theme.text.main};
    font-size: 2rem;
  }
`

const ResourceSectionWrapper = styled.div`
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
