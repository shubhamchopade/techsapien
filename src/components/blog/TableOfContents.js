import React from "react"
import Scrollspy from "react-scrollspy"
import "./styles.css"

export const TableOfContents = ({ post }) => {
  let url = []
  post.items.map(heading => {
    url.push(heading.url.substring(1))
  })

  console.log(url)

  return (
    <nav className="navbar">
      <Scrollspy items={url} currentClassName="is-current" className="toc-list">
        {post.items.map(heading => (
          <li key={heading.url}>
            <a href={heading.url}>{heading.title}</a>
          </li>
        ))}
      </Scrollspy>
    </nav>
  )
}
