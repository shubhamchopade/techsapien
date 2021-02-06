import React from "react"
import { RootElement } from "./src/RootElement"

export const wrapRootElement = ({ element }) => (
  <RootElement element={element} />
)

export const onInitialClientRender = () => {
  document.body.style.height = "100%"
  document.body.style.overflow = "hidden"
  const loader = document.getElementById("___loader")
  setTimeout(function () {
    loader.style.transform = "translateY(-50vh) scale(0.2)"
    // loader.style.transform = "scale(0.2)"
    loader.style.transition = "0.5s ease"
    loader.style.opacity = "0"
  }, 4000)
  setTimeout(function () {
    loader.style.display = "none"
    document.body.style.height = "auto"
    document.body.style.overflow = "auto"
  }, 4200)
}
