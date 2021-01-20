import React from "react"
import { RootElement } from "./src/RootElement"

export const wrapRootElement = ({ element }) => (
  <RootElement element={element} />
)
