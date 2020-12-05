import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav } from "../components"
import { Footer } from "../components"

export const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}
