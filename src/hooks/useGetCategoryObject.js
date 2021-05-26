import { useEffect, useState } from "react"

function useGetCategoryObject(string) {
  const [response, setResponse] = useState("")
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setLoader(true)
    const getData = () => {
      fetch(
        "https://raw.githubusercontent.com/sindresorhus/awesome/main/readme.md"
      )
        .then(response => response.text())
        .then(data => setResponse(data))
        .then(setLoader(false))
    }
    getData()
  }, [string])

  return { response, loader }
}

export default useGetCategoryObject
