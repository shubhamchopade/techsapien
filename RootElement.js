import { ThemeProvider, createGlobalStyle } from "styled-components"
import { lightTheme, darkTheme } from "./src/themes/theme"
import { preToCodeBlock } from "mdx-utils"
import React, { useState } from "react"
import { DarkContext } from "./src/store/context"
import "./language-tabs.css"
import { MDXProvider } from "@mdx-js/react"
import { Button, Code, Footer } from "./src/components"

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body, html{
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.bgSecondary}
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
  Button,
  Footer,
}

export const RootElement = ({ element }) => {
  const [isDark, setIsDark] = useState("dark")
  const themeMode = isDark === "dark" ? darkTheme : lightTheme

  console.log(isDark)
  return (
    <MDXProvider components={components}>
      <DarkContext.Provider value={[isDark, setIsDark]}>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          {element}
        </ThemeProvider>
      </DarkContext.Provider>
    </MDXProvider>
  )
}
