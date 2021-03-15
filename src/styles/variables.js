import { css } from "styled-components"

const variables = css`
  --background-color-main: ${props => props.theme.bg.main};
  --text-color-main: ${props => props.theme.text.main};
`

export default variables
