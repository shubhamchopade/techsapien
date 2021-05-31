import { useEffect, useState } from "react"

function useGetRepoDetails(data, setCurrentRepo, setLoader) {
  const [response, setResponse] = useState("")
  const [parsedMarkdownRaw, setParsedMarkdownRaw] = useState("")
  const [parsedMarkdown, setParsedMarkdown] = useState("")

  let [content, setContent] = useState("")
  const { owner, repoName } = data

  useEffect(() => {
    const getData = () => {
      if (owner) {
        setLoader(true)
        fetch(`https://api.github.com/repos/${owner}/${repoName}`)
          .then(response => response.json())
          .then(data => setResponse(data))
        fetch(`https://api.github.com/repos/${owner}/${repoName}/contents`)
          .then(response => response.json())
          .then(data => setContent(data))
      }
    }
    getData()
  }, [repoName, owner])

  useEffect(() => {
    const rawMarkdown =
      content && content.filter(a => a.name.toLowerCase() === "readme.md")

    // console.log(rawMarkdown)
    const getData = () => {
      if (content) {
        fetch(rawMarkdown[0].download_url)
          .then(response => response.text())
          .then(data => setParsedMarkdownRaw(data))
          .then(() => setLoader(false))
      }
    }
    getData()
  }, [content, setLoader])

  useEffect(() => {
    let contents = parsedMarkdownRaw.split("## ")
    console.log(contents)
    const rawHeadings = []

    contents = contents.splice(1, contents.length)
    const contentStrings = ["content", "contents", "table of contents"]

    contents.forEach((c, i) => {
      let heading = c.split("\n")[0]
      !contentStrings.includes(heading.toLowerCase()) &&
        rawHeadings.push(heading)
    })

    console.log(contents, rawHeadings)
  })

  return { response, content, parsedMarkdownRaw }
}

export default useGetRepoDetails
