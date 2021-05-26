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
        fetch(`https://api.github.com/repos/${owner}/${repoName}`)
          .then(response => response.json())
          .then(data => setResponse(data))
          .then(setLoader(false))
        fetch(`https://api.github.com/repos/${owner}/${repoName}/contents`)
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
