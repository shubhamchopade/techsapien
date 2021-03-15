import React from "react"
import { RootElement } from "./src/RootElement"

export const wrapPageElement = ({ element }) => (
  <RootElement element={element} />
)
