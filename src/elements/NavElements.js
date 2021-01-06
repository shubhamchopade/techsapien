import { Link } from "gatsby"
import styled from "styled-components"

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.navBg};

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

export const Toggle = styled.div`
  cursor: pointer;
  user-select: none;
  transition: 0.2s all ease;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  color: #fff;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;

  &:hover {
    background-color: #173f42;
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
  width: 12rem;
  min-width: 11rem;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;

  &:hover {
    h1 {
      display: inline-block;
      transform: translateX(30px);
      transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
      opacity: 1;
    }
  }

  img {
    width: 1.5rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: normal;
    position: absolute;
    transform: translateX(-150px);
    opacity: 0;

    span {
      font-weight: bold;
    }
  }
`
