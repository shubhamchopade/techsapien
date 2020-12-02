import { ThemeProvider, createGlobalStyle } from "styled-components"
import { lightTheme, darkTheme } from "./src/themes/theme"
import { preToCodeBlock } from "mdx-utils"
import React, { useState } from "react"
import { DarkContext } from "./src/store/context"
import "./language-tabs.css"
import { MDXProvider } from "@mdx-js/react"
import { Code } from "./src/components"
import { RootElement } from "./RootElement"

export const wrapRootElement = ({ element }) => (
  <RootElement element={element} />
)
