import React from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import { GlobalStyles } from "../styles/styles"
import { Container } from "../components/shared/index"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
