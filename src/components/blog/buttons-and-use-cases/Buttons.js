import React, { useState } from "react"
import styled from "styled-components"
import { solidImages, outlinedImages } from "./images"

export const SolidButton1 = ({ children }) => {
  const [currentState, setCurrentState] = useState({
    defaultSolidImg: true,
    hoverSolidImg: false,
    activeSolidImg: false,
    focusedSolidImg: false,
  })
  const {
    defaultSolidImg,
    hoverSolidImg,
    activeSolidImg,
    focusedSolidImg,
  } = solidImages

  return (
    <>
      <StyledDiv>
        <BtnImageContainer currentState={currentState}>
          <img
            style={{ opacity: currentState.defaultSolidImg && "100%" }}
            key={defaultSolidImg.id}
            src={defaultSolidImg.src}
            title={defaultSolidImg.title}
            alt={defaultSolidImg.description}
          />
          <img
            style={{ opacity: currentState.hoverSolidImg && "100%" }}
            key={hoverSolidImg.id}
            src={hoverSolidImg.src}
            title={hoverSolidImg.title}
            alt={hoverSolidImg.description}
          />
          <img
            style={{ opacity: currentState.activeSolidImg && "100%" }}
            key={activeSolidImg.id}
            src={activeSolidImg.src}
            title={activeSolidImg.title}
            alt={activeSolidImg.description}
          />
          <img
            style={{ opacity: currentState.focusedSolidImg && "100%" }}
            key={focusedSolidImg.id}
            src={focusedSolidImg.src}
            title={focusedSolidImg.title}
            alt={focusedSolidImg.description}
          />
        </BtnImageContainer>
        <SolidButton
          onMouseEnter={() =>
            setCurrentState({
              ...currentState,
              defaultSolidImg: false,
              hoverSolidImg: true,
            })
          }
          onMouseLeave={() =>
            setCurrentState({ ...currentState, hoverSolidImg: false })
          }
          onFocus={() =>
            setCurrentState({
              ...currentState,
              defaultSolidImg: false,
              focusedSolidImg: true,
            })
          }
          onBlur={() =>
            setCurrentState({
              ...currentState,
              defaultSolidImg: true,
              focusedSolidImg: false,
            })
          }
          onMouseDown={() =>
            setCurrentState({ ...currentState, activeSolidImg: true })
          }
          onMouseUp={() =>
            setCurrentState({ ...currentState, activeSolidImg: false })
          }
        >
          {children}
        </SolidButton>
      </StyledDiv>
    </>
  )
}

export const OutlinedButton1 = ({ children }) => {
  const [currentState, setCurrentState] = useState({
    defaultOutlinedImg: true,
    hoverOutlinedImg: false,
    activeOutlinedImg: false,
    focusedOutlinedImg: false,
  })
  const {
    defaultOutlinedImg,
    hoverOutlinedImg,
    activeOutlinedImg,
    focusedOutlinedImg,
  } = outlinedImages
  return (
    <StyledDiv>
      <BtnImageContainer currentState={currentState}>
        <img
          style={{ opacity: currentState.defaultOutlinedImg && "100%" }}
          alt={defaultOutlinedImg.title}
          src={defaultOutlinedImg.src}
        />
        <img
          style={{ opacity: currentState.hoverOutlinedImg && "100%" }}
          alt={hoverOutlinedImg.title}
          src={hoverOutlinedImg.src}
        />
        <img
          style={{ opacity: currentState.activeOutlinedImg && "100%" }}
          alt={activeOutlinedImg.title}
          src={activeOutlinedImg.src}
        />
        <img
          style={{ opacity: currentState.focusedOutlinedImg && "100%" }}
          alt={focusedOutlinedImg.title}
          src={focusedOutlinedImg.src}
        />
      </BtnImageContainer>
      <OutlinedButton
        onMouseEnter={() =>
          setCurrentState({
            ...currentState,
            defaultOutlinedImg: false,
            hoverOutlinedImg: true,
          })
        }
        onMouseLeave={() =>
          setCurrentState({ ...currentState, hoverOutlinedImg: false })
        }
        onFocus={() =>
          setCurrentState({
            ...currentState,
            defaultOutlinedImg: false,
            focusedOutlinedImg: true,
          })
        }
        onBlur={() =>
          setCurrentState({
            ...currentState,
            defaultOutlinedImg: true,
            focusedOutlinedImg: false,
          })
        }
        onMouseDown={() =>
          setCurrentState({ ...currentState, activeOutlinedImg: true })
        }
        onMouseUp={() =>
          setCurrentState({ ...currentState, activeOutlinedImg: false })
        }
      >
        {children}
      </OutlinedButton>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  margin: 1rem auto;
  filter: drop-shadow(0 0 0.35rem ${props => props.theme.bg.neutral});
`
const BtnImageContainer = styled.div`
  max-width: 20rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem;

  img {
    opacity: 20%;
    margin: 0.3rem;
    transition: 0.2s ease;
    /* padding: 0.3rem; */

    @media ${props => props.theme.breakpoints.mobile} {
      width: 25%;
    }
  }
`

export const SolidButton = styled.button`
  background: ${props => props.theme.light.text.neutral};
  padding: 11px 49px;
  border: none;
  border-radius: 10px;
  font-family: ${props => props.theme.fonts.blog};
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  border: 4px solid #fff;
  outline: none;
  margin: 2rem auto;

  &:focus,
  &:hover {
    background: ${props => props.theme.dark.bg.neutral};
  }
  &:focus,
  &:active {
    border: 4px solid ${props => props.theme.dark.text.neutral};
  }
`

export const OutlinedButton = styled(SolidButton)`
  background: transparent;
  border: 2px solid ${props => props.theme.light.text.neutral};
  color: ${props => props.theme.light.text.main};

  &:focus,
  &:hover {
    background: ${props => props.theme.dark.text.main};
    border: 2px solid ${props => props.theme.dark.text.neutral};
  }
  &:focus,
  &:active {
    background: ${props => props.theme.dark.text.secondary};
    border: 4px solid ${props => props.theme.dark.text.neutral};
  }
`
