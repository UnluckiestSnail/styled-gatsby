import styled from "styled-components"
import {
  Link
} from "gatsby"
import {
  Container
} from "../shared/index"

export const Header = styled.header `
  background-color: purple;
  color: #fff;
`

export const HeaderContainer = styled(Container)
`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  ${Container}
`

export const HeaderLogo = styled(Link)
`
  font-size: 24px;
  text-decoration: none;
  color: #fff;
`

export const HeaderNav = styled.ul `
  list-style: none;
  display: flex;
`

export const NavItem = styled.li `
  &:not(:last-child) {
    margin-right: 15px;
  }
`

export const NavLink = styled(Link)
`
  text-decoration: none;
  color: #fff;
`