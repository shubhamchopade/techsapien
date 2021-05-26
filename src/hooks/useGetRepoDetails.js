import { useEffect, useState } from "react"

function useGetRepoDetails(data, setCurrentRepo) {
  const [response, setResponse] = useState("")
  const [loader, setLoader] = useState(true)
  let [content, setContent] = useState("")
  const { owner, repoName } = data

  useEffect(() => {
    setLoader(true)
    const getData = () => {
      if (owner) {
        fetch(`https://api.github.com/repos/${owner}/${repoName}`, {
          headers: {
            authorization: "token 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",
          },
        })
          .then(response => response.json())
          .then(data => setResponse(data))
          .then(setLoader(false))
        fetch(`https://api.github.com/repos/${owner}/${repoName}/contents`, {
          headers: {
            authorization: "token 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",
          },
        })
          .then(response => response.json())
          .then(data => setContent(data))
          .then(() => setCurrentRepo({}))
      }
    }
    getData()
  }, [repoName, owner])

  return { response, loader, content }
}

export default useGetRepoDetails
