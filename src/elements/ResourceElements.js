import styled from "styled-components"

export const MarkdownContainer = styled.main`
  max-height: 30rem;
  width: 50rem;
  overflow-y: auto;
  background-color: ${props => props.theme.light.bg.main};
  position: sticky;
  top: 100px;
  right: 0;
  z-index: 4;
  color: ${props => props.theme.text.main};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;

  .inner-container {
    padding: 2rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`
