import { useEffect, useState } from "react"

const useGetReadMeFileAsText = data => {
  const [response, setResponse] = useState("")
  const [status, setStatus] = useState("INITIAL")

  useEffect(() => {
    const getData = () => {
      setStatus("LOADING")
      if (data) {
        fetch(data)
          .then(response => response.text())
          .then(data => setResponse(data))
          .then(() => setStatus("RESOLVED"))
      }
    }
    getData()
  }, [data])

  return { response, status }
}

export default useGetReadMeFileAsText
