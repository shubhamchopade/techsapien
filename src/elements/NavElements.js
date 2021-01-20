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
    background-color: ${({ open }) => (open ? "#333" : "#ccc")};
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
  justify-content: space-around;
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
  padding: 1rem;
  text-decoration: none;
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: ${props => props.theme.bg.secondary};

  .theme-elements {
    display: flex;
    justify-content: space-around;
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
  border-radius: 0.3rem;
  color: ${props => props.theme.text.main};

  &:hover {
    border-bottom: 1px solid #19b2b9;
  }
  &:active {
    filter: brightness(90%);
  }

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3rem;
    padding: 1rem;
    margin: 0 auto;
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
  border: 2px solid #10d1b6;
  border-radius: 100%;
  outline: #fff;
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
