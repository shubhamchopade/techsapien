import { ThemeProvider, createGlobalStyle } from "styled-components"
import { light, dark, warm, commonStyles, font } from "./themes/theme"
import { preToCodeBlock } from "mdx-utils"
import React, { useState, useEffect } from "react"
import { DarkContext } from "./store/context"
import "./language-tabs.css"
import { MDXProvider } from "@mdx-js/react"
import { Code, Footer, Nav } from "./components"
import { ResourceBlock } from "./components/resource/ResourceBlock"
import { ResourceBlockContainer } from "./components/resource/ResourceBlockContainer"
import {
  CustomCursor,
  SolidButton1,
  OutlinedButton1,
  Blob,
} from "./components/blog"

const GlobalStyles = createGlobalStyle`
    *{
      box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: ${props => props.theme.animations.theme};
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
          fill: none;
          margin: 0 1rem;
        }

        h1:hover{
          .autolink-header {
          fill: ${props => props.theme.text.main};
          

          &:hover{
            fill: ${props => props.theme.text.neutral};
          }
        }
        }
        h2:hover{
          .autolink-header {
          fill: ${props => props.theme.text.main};
          
        }
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
  Footer,
  ResourceBlock,
  ResourceBlockContainer,
  CustomCursor,
  SolidButton1,
  OutlinedButton1,
  Blob,
}
export const RootElement = ({ element }) => {
  const [isDark, setIsDark] = useState("warm")
  const [isSans, setIsSans] = useState("sans")
  let themeMode = ""
  themeMode =
    isDark === "dark"
      ? { ...dark, ...commonStyles }
      : isDark === "warm"
        ? { ...warm, ...commonStyles }
        : { ...light, ...commonStyles }

  let fontFamily =
    isSans === "sans" ? font.sans : isSans === "serif" ? font.serif : font.slab

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
  }, [])

  return (
    <MDXProvider components={components}>
      <DarkContext.Provider value={{ isDark, setIsDark, isSans, setIsSans }}>
        <ThemeProvider theme={{ ...themeMode, fontFamily, light, dark, warm }}>
          <GlobalStyles />
          {/* <Loader /> */}
          <Nav />
          {element}
          <Footer />
        </ThemeProvider>
      </DarkContext.Provider>
    </MDXProvider>
  )
}
