import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import useGetCategoryObject from "../../hooks/useGetCategoryObject"
import useGetRepoDetails from "../../hooks/useGetRepoDetails"
import useGetReadMeFileAsText from "../../hooks/useGetReadMeFileAsText"
import { graphql, useStaticQuery } from "gatsby"
import { PostHeader } from "../../elements/PostElements"

const GetMarkDownData = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        data
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

  const contents = data.github.data.split("## ")
  const getReadMeFile =
    repoDetails.content &&
    repoDetails.content.filter(a => a.name.toLowerCase() === "readme.md")

  const textResponse = useGetReadMeFileAsText(
    getReadMeFile[0] && getReadMeFile[0].download_url
  )

  useEffect(() => {
    setStarCount(repoDetails.response.stargazers_count)
  }, [repoDetails.response.stargazers_count])

  let content = contents.map((c, i) => {
    let heading = ""
    let title = ""
    let link = ""
    let data = []
    heading = c.split("\n\n")[0]
    title =
      c.match(/\[.*?\]/g) &&
      c.match(/\[.*?\]/g).map(x => x.replace(/[[]]/g, ""))
    link =
      c.match(/\(.*?\)/g) &&
      c.match(/\(.*?\)/g).map(x => x.replace(/[()]/g, ""))

    if (title) {
      for (let i = 0; i < title.length; i++) {
        data.push({
          title: title[i].replace(/[[]]/g, ""),
          link: link[i],
          owner: link[i].split("/", 5)[3],
          repoName:
            link[i].split("/", 5)[4] && link[i].split("/", 5)[4].split("#")[0],
        })
      }
    }
    return { heading, data }
  })
  content = content.splice(2, content.length)

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          {content.map((c, index) => {
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

const MarkdownContainer = styled.main`
  max-height: 30rem;
  width: 90rem;
  max-width: 90rem;
  overflow-y: auto;
  background-color: ${props => props.theme.bg.secondary};
  padding: 4rem;
  position: sticky;
  top: 20px;
  right: 0;
  z-index: 4;
  color: ${props => props.theme.text.main};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.text.main};
    font-family: ${props => props.theme.fontFamily.heading};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }
  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
    color: ${props => props.theme.text.main};
    margin-top: 2rem;
    font-family: ${props => props.theme.fontFamily.paragraph};
  }

  .small-text {
    display: none;
    @media ${props => props.theme.breakpoints.mobile} {
      display: block;
      line-height: normal;
      font-size: 0.825rem;
      margin-top: 1rem;
      color: ${props => props.theme.text.secondary};
    }
  }

  a {
    color: ${props => props.theme.text.main};
    text-decoration: underline;
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    text-decoration: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
    padding: 2rem;
    border-left: 10px solid #ccc;
    background: ${props => props.theme.bg.neutral};
  }
  ul,
  ol {
    color: ${props => props.theme.text.main};
    margin: 1rem 0 1rem 2rem;
  }

  pre {
    font-family: ${props => props.theme.fonts.code};
    font-size: 0.875rem;
    margin: 1rem auto;
    border-radius: 0.5rem;
    line-height: 1.875rem;
    color: ${props => props.theme.text.main};
    background-color: ${props => props.theme.bg.main};
    padding: 1rem;
  }

  code {
    background-color: #d1e9f0;
    color: #0f272e;
    padding: 0.3rem;
    border-radius: 0.2rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.bg.main};
    opacity: 0.1;
    margin: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  th {
    width: 100%;
  }
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
`
