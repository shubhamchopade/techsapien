import { Link } from "gatsby"
import styled from "styled-components"

export const StyledBurger = styled.div`
  width: 2rem;
  height: 1rem;
  position: absolute;
  top: 22px;
  left: 20px;
  z-index: 9999;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.text.main};
    border-radius: 10px;
    transform-origin: 32%;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    opacity: ${({ open }) => (open ? "1" : "0")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-bottom: 1rem;
    padding-top: 3rem;
    transition: all 0.1s ease-in-out;
    background-color: ${props => props.theme.bg.main};
    box-shadow: 0 1px 8px 0 rgba(31, 39, 135, 0.37);
  }
`

export const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem;
  text-decoration: none;
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: ${props => props.theme.bg.secondary};

  @media ${props => props.theme.breakpoints.tablet} {
    margin-bottom: 1rem;
    height: 1rem;
  }

  .theme-elements {
    display: flex;
    position: absolute;
    top: 12px;
    right: 15px;
  }
`

export const LinksContainer = styled.div``

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.8rem;
  padding: 0.2rem;
  font-weight: bold;
  color: ${props => props.theme.text.main};
  font-family: ${props => props.theme.fontFamily.heading};

  &:nth-child(2) {
    padding: 0 0.7rem;
  }
  &:last-child {
    padding-left: 0.7rem;
  }

  &:hover {
    text-decoration: underline;
  }
  &:active {
    filter: brightness(90%);
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3rem;
    margin: 0 auto;

    &:first-child {
      padding-top: 3rem;
    }
    &:last-child {
      padding-bottom: 3rem;
    }
  }
`

export const LogoLink = styled(Link)`
  padding: 0;
  position: relative;
  img {
    width: 3rem;
    position: absolute;
    top: 20px;
    left: 0;
    transform: translate(-50%, -50%);
    z-index: 1;
    border-radius: 50%;
    box-shadow: 1px 5px 8px 0px ${props => props.theme.shadows.shadow1};
  }
`
export const ThemeSwitcher = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  background-color: ${props => {
    switch (props.isDark) {
      case "light":
        return "#27241D"
      case "dark":
        return "#FFFFFF"
      case "warm":
        return "#102A43"
      default:
        return "#aaa"
    }
  }};
  border: 8px solid ${props => props.theme.text.neutral};
  border-radius: 100%;
  outline: #fff;
  margin-right: 0.5rem;
`

export const FontSwitcher = styled(ThemeSwitcher)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  svg {
    width: 1rem;
  }

  svg > path {
    fill: ${props => props.theme.text.neutral};
  }
`
