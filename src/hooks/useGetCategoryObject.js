import React, { useEffect, useState } from "react"

function useGetCategoryObject(string) {
  const [response, setResponse] = useState("")
  const [singleCategory, setSingleCategory] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setLoader(true)
    const getData = () => {
      fetch(
        "http://raw.githubusercontent.com/sindresorhus/awesome/main/readme.md"
      )
        .then(response => response.text())
        .then(data => setResponse(data))
        .then(setLoader(false))
    }
    getData()
  }, [string])

  useEffect(() => {
    const getCategoryString = string => {
      const index = response.indexOf(string)
      return response.substr(index, response.length)
    }
    const getCategoryObject = str => {
      const title =
        str.match(/\[.*?\]/g) &&
        str.match(/\[.*?\]/g).map(x => x.replace(/[[]]/g, ""))
      const links =
        str.match(/\(.*?\)/g) &&
        str.match(/\(.*?\)/g).map(x => x.replace(/[()]/g, ""))

      let obj = []

      if (title) {
        for (let i = 0; i < title.length; i++) {
          obj.push({ title: title[i], link: links[i] })
        }
      }

      setSingleCategory(obj)
    }
    getCategoryObject(getCategoryString(string))
  }, [response])

  return { singleCategory, response, loader }
}

export default useGetCategoryObject
