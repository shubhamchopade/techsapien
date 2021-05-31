import React from "react"
import styled from "styled-components"

const MarkdownViewerHeader = props => {
  const { repoDetails } = props
  // console.log(repoDetails)
  return (
    <Wrapper>
      <Svg {...props} />
      <Title>{repoDetails.response.name}</Title>
      <StarsWrapper>
        <Star />
        <p>{repoDetails.response.stargazers_count}</p>
      </StarsWrapper>
    </Wrapper>
  )
}

export default MarkdownViewerHeader

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  height: 3rem;
  background-color: ${props => props.theme.bg.neutral};
  width: 100%;
  padding: 1rem;
  z-index: 99;
`
const Title = styled.h5`
  color: ${props => props.theme.text.main};
  font-size: 1rem;
  font-weight: 500;
`
const StarsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Svg = ({ setCloseModal, setCurrentRepo }) => {
  return (
    <SvgButton
      onClick={() => {
        setCurrentRepo({})
        setCloseModal(true)
      }}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27 8.1427L23.8573 5L16 12.8573L8.1427 5L5 8.1427L12.8573 16L5 23.8573L8.1427 27L16 19.1427L23.8573 27L27 23.8573L19.1427 16L27 8.1427Z"
        fill="white"
      />
    </SvgButton>
  )
}

const Star = () => {
  return (
    <StyledStar
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99992 0.25C8.13994 0.24991 8.27718 0.289014 8.39612 0.362887C8.51506 0.43676 8.61094 0.542452 8.67292 0.668L10.5549 4.483L14.7649 5.095C14.9034 5.11511 15.0335 5.17355 15.1404 5.26372C15.2474 5.35388 15.3271 5.47218 15.3703 5.60523C15.4136 5.73829 15.4188 5.8808 15.3853 6.01665C15.3519 6.1525 15.2811 6.27628 15.1809 6.374L12.1349 9.344L12.8539 13.536C12.8776 13.6739 12.8623 13.8157 12.8096 13.9454C12.7569 14.0751 12.669 14.1874 12.5558 14.2697C12.4426 14.352 12.3086 14.401 12.169 14.4111C12.0294 14.4212 11.8898 14.3921 11.7659 14.327L7.99992 12.347L4.23392 14.327C4.11011 14.392 3.97059 14.4211 3.83111 14.411C3.69164 14.4009 3.55776 14.352 3.4446 14.2699C3.33145 14.1877 3.24351 14.0755 3.19074 13.946C3.13796 13.8165 3.12243 13.6749 3.14592 13.537L3.86592 9.343L0.81792 6.374C0.717486 6.27632 0.646419 6.15247 0.612772 6.01647C0.579124 5.88047 0.584242 5.73777 0.627544 5.60453C0.670847 5.47129 0.750603 5.35284 0.857776 5.26261C0.964948 5.17238 1.09525 5.11397 1.23392 5.094L5.44392 4.483L7.32692 0.668C7.3889 0.542452 7.48479 0.43676 7.60373 0.362887C7.72267 0.289014 7.85991 0.24991 7.99992 0.25ZM7.99992 2.695L6.61492 5.5C6.56114 5.6089 6.48171 5.70311 6.38347 5.77453C6.28522 5.84595 6.1711 5.89244 6.05092 5.91L2.95392 6.36L5.19392 8.544C5.28107 8.62886 5.34628 8.73365 5.38391 8.84933C5.42154 8.96501 5.43047 9.0881 5.40992 9.208L4.88192 12.292L7.65092 10.836C7.75855 10.7794 7.87833 10.7499 7.99992 10.7499C8.12152 10.7499 8.24129 10.7794 8.34892 10.836L11.1189 12.292L10.5889 9.208C10.5684 9.0881 10.5773 8.96501 10.6149 8.84933C10.6526 8.73365 10.7178 8.62886 10.8049 8.544L13.0449 6.361L9.94892 5.911C9.82874 5.89344 9.71462 5.84695 9.61638 5.77553C9.51813 5.70411 9.43871 5.6099 9.38492 5.501L7.99992 2.694V2.695Z"
        fill="#586069"
      />
    </StyledStar>
  )
}

const SvgButton = styled.svg`
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  path {
    fill: ${props => props.theme.text.main};
  }
`
const StyledStar = styled.svg`
  margin-right: 0.5rem;
  path {
    fill: ${props => props.theme.text.main};
  }
`
