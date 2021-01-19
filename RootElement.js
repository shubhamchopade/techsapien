import { ThemeProvider, createGlobalStyle } from "styled-components"
import {
  lightTheme,
  darkTheme,
  light,
  dark,
  warm,
  commonStyles,
} from "./src/themes/theme"
import { preToCodeBlock } from "mdx-utils"
import React, { useState, useEffect } from "react"
import { DarkContext } from "./src/store/context"
import "./language-tabs.css"
import { MDXProvider } from "@mdx-js/react"
import { Button, Code, Footer, Nav } from "./src/components"

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: ${props => props.theme.animations.bg};
    a {
      text-decoration: none;
      color: inherit;
    }
    }
    
    body, html{
        height: 100%;
        font-family: ${props => props.theme.fonts.main};
        background-color: ${props => props.theme.bg.main};

        .autolink-header {
          fill: ${props => props.theme.text.main};
          margin: 0 1rem;
        }
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
  let themeMode = isDark === "dark" ? darkTheme : lightTheme
  themeMode =
    isDark === "dark"
      ? { ...dark, ...commonStyles }
      : isDark === "warm"
      ? { ...warm, ...commonStyles }
      : { ...light, ...commonStyles }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
  }, [])

  console.log({ ...dark, ...commonStyles })
  return (
    <MDXProvider components={components}>
      <DarkContext.Provider value={[isDark, setIsDark]}>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Nav />
          {element}
          <Footer />
        </ThemeProvider>
      </DarkContext.Provider>
    </MDXProvider>
  )
}
