import React from "react"
import Helmet from "react-helmet"
import logo from "../../images/logo.svg"

const SEO = ({ pageMeta, children }) => (
  <>
    <Helmet>
      <title>{`Tech Sapien | ${pageMeta.title}`}</title>

      {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Tech Sapien" />
      <meta property="og:title" content={`Tech Sapien | ${pageMeta.title}`} />
      <meta property="og:description" content={pageMeta.description} />
      <meta property="og:image" content={pageMeta.img ? pageMeta.img : logo} />
      <meta property="og:url" content={pageMeta.url} />
      <meta property="og:type" content="article" />

      <meta
        property="twitter:title"
        content={`Tech Sapien | ${pageMeta.title}`}
      />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@chopadeshubham4" />
      <meta property="twitter:description" content={pageMeta.description} />
      <meta
        property="twitter:image"
        content={pageMeta.img ? pageMeta.img : logo}
      />

      {/* The rest we set dynamically with props */}
      <meta name="description" content={pageMeta.description} />

      {/* We pass an array of keywords, and then we use the Array.join method to convert them to a string where each keyword is separated by a comma */}
      <meta name="keywords" content={pageMeta.keywords.join(",")} />
    </Helmet>
  </>
)

export default SEO
