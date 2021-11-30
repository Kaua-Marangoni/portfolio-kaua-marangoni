import React, { useEffect, useState } from "react"
import "./App.css"

import HeaderSite from "./components/Header/Header"
import Projects from "./components/ListProjects/Projects"
import PrimarySection from "./components/Section/Section"
import SectionsContacts from "./components/SectionContacts/SectionContacts"
import { Container, Footer } from "./styles"

const App = () => {
  const [activeButton, setActiveButton] = useState(false)

  useEffect(() => {
    const positionScroll = () => {
      if (window.scrollY > 250) {
        setActiveButton(true)
      } else {
        setActiveButton(false)
      }
    }

    window.addEventListener("scroll", positionScroll)
  }, [])

  return (
    <Container>
      <HeaderSite />

      <PrimarySection />

      <Projects />

      <SectionsContacts />

      <Footer>&copy; 2021 Site produzido por Kauã Marangoni</Footer>
      <a
        className={activeButton ? "back-to-top" : "back-to-top-disable"}
        href="#home"
      >
        <i className="far fa-arrow-alt-circle-up"></i>
      </a>
    </Container>
  )
}

export default App
