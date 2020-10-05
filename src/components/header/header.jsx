import React from "react"
import {
  Header,
  HeaderContainer,
  HeaderNav,
  NavLink,
  HeaderLogo,
  NavItem,
} from "./header.elements.js"

export default () => {
  return (
    <Header>
      <HeaderContainer>
        <HeaderLogo to="/">Logo</HeaderLogo>
        <HeaderNav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
        </HeaderNav>
      </HeaderContainer>
    </Header>
  )
}
