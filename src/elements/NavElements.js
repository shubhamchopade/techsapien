import { Link } from "gatsby"
import styled from "styled-components"

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  text-decoration: none;

  img {
    height: 30px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25rem;
`

export const Toggle = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all ease;
  border-radius: 100%;
  padding: 0.2rem;

  &:focus {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(0.9);
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.8rem;
  padding: 0.4rem;
  font-weight: bold;
  border-radius: 0.3rem;
  color: ${props => props.theme.text.main};
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid #19b2b9;
  }
  &:active {
    filter: brightness(90%);
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: none;
  }
`

export const LogoLink = styled(StyledLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0 1.2rem;
  position: relative;
  border-radius: 2rem;

  &:hover {
    h1 {
      display: inline-block;
      transform: translateX(30px);
      opacity: 1;
    }
  }

  img {
    width: 1.5rem;
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: normal;
    position: absolute;

    transform: translateX(0px);
    opacity: 0;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;

    span {
      font-weight: bold;
    }
  }
`
