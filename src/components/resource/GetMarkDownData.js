import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import useGetRepoDetails from "../../hooks/useGetRepoDetails"
import { graphql, useStaticQuery } from "gatsby"
import { MarkdownContainer } from "../../elements"
import "../../styles/github-markdown.css"
import { Loader } from "../Loader"
import MarkdownViewerHeader from "./MarkdownViewerHeader"
import ShowContents from "./ShowContents"

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
  const [loader, setLoader] = useState(true)
  const repoDetails = useGetRepoDetails(currentRepo, setCurrentRepo, setLoader)
  const [closeModal, setCloseModal] = useState(true)

  const allGithubData = data.allGithub.nodes

  return (
    <>
      <MainWrapper>
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
                        if (d.owner !== currentRepo.owner) {
                          setCloseModal(false)
                          setCurrentRepo(d)
                          setLoader(true)
                        }
                      }}
                      style={{
                        border:
                          d.owner === currentRepo.owner
                            ? "2px solid white"
                            : "",
                        cursor: d.owner === currentRepo.owner && "default",
                      }}
                    >
                      <h4>{d.title}</h4>
                      <h6>
                        Async non-blocking event-driven JavaScript runtime built
                        on Chrome's V8 JavaScript engine.
                      </h6>
                    </StyledBlock>
                  ))}
                </ResourceSectionWrapper>
              </ResourceContainer>
            )
          })}
        </div>
        {!closeModal && (
          <MarkdownContainer>
            <MarkdownViewerHeader
              setCurrentRepo={setCurrentRepo}
              closeModal={closeModal}
              setCloseModal={setCloseModal}
              repoDetails={repoDetails}
            />

            <div>
              {loader ? (
                <Loader />
              ) : (
                <div className="markdown-body">
                  <Container>
                    <ShowContents repoHeadings={repoDetails.repoHeadings} />
                    <div className="inner-container">
                      <ReactMarkdown
                        skipHtml
                        children={repoDetails.parsedMarkdownRaw}
                      />
                    </div>
                  </Container>
                </div>
              )}
            </div>
          </MarkdownContainer>
        )}
      </MainWrapper>
    </>
  )
}

export default GetMarkDownData

const MainWrapper = styled.main`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`

const Container = styled.div`
  display: flex;
  position: relative;
`

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
  cursor: pointer;
  max-width: 17rem;

  h4 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  h6 {
    font-size: 1.1rem;
    font-weight: 400;
    margin-top: 1rem;
  }

  &:active {
    border: 2px solid ${props => props.theme.light.bg.main};
  }

  &:hover {
    filter: brightness(90%);
  }
`
