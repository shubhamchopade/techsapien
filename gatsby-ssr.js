import { ThemeProvider, createGlobalStyle } from "styled-components"
import Theme from "./src/themes/theme"
import { preToCodeBlock } from "mdx-utils"
import React from "react"
import "./language-tabs.css"
import { MDXProvider } from "@mdx-js/react"
import { Code } from "./src/components"

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body, html{
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light1}
    }
`
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)

    if (props) {
      return <Code {...props} />
    }

    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
