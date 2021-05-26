import { useEffect, useState } from "react"

function useGetReadMeFileAsText(data) {
  const [response, setResponse] = useState("")

  useEffect(() => {
    const getData = () => {
      if (data) {
        fetch(data)
          .then(response => response.text())
          .then(data => setResponse(data))
      }
    }
    getData()
  }, [data])

  return { response }
}

export default useGetReadMeFileAsText
