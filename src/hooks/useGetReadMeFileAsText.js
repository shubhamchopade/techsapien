import { useEffect, useState } from "react"

const useGetReadMeFileAsText = (data, setLoader) => {
  const [response, setResponse] = useState("")

  useEffect(() => {
    const getData = () => {
      setLoader(true)
      if (data) {
        fetch(data)
          .then(response => response.text())
          .then(data => setResponse(data))
          .then(() => setLoader(false))
      }
    }
    getData()
  }, [data])

  return { response }
}

export default useGetReadMeFileAsText
