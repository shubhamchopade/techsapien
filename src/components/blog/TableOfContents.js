import React from "react"
import Scrollspy from "react-scrollspy"
import "./styles.css"

export const TableOfContents = ({ post }) => {
  let url = []
  post.items.map(heading => {
    url.push(heading.url.substring(1))

    heading.items &&
      heading.items.map(subHeading => {
        url.push(subHeading.url.substring(1))
      })
  })

  console.log(url)
  return (
    <nav className="navbar">
      <Scrollspy items={url} currentClassName="is-current" className="toc-list">
        {post.items.map(heading => (
          <>
            <li key={heading.url}>
              <a href={heading.url}>{heading.title}</a>
            </li>
            <ul className="subheading">
              {heading.items &&
                heading.items.map(subHeading => (
                  <li key={subHeading.url}>
                    <a href={subHeading.url}>{subHeading.title}</a>
                  </li>
                ))}
            </ul>
          </>
        ))}
      </Scrollspy>
    </nav>
  )
}
