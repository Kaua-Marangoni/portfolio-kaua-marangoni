import React from "react"

import { Header, H1, Ul, Li } from "./HeaderStyles"

const HeaderSite = () => {
  return (
    <Header id="home">
      <H1>Kauã Marangoni</H1>
      <input type="checkbox" id="check" />
      <label className="bars" htmlFor="check">
        <i className="fas fa-bars"></i>
      </label>
      <label className="close" htmlFor="check">
        <i className="fas fa-times"></i>
      </label>

      <nav>
        <Ul className="ul">
          <a className="nav-links" href="#sobre">
            <Li className="li">Social</Li>
          </a>
          <a className="nav-links" href="#projects">
            <Li className="li">Projetos</Li>
          </a>
          <a className="nav-links" href="#contact">
            <Li className="li">Contato</Li>
          </a>
        </Ul>
      </nav>
    </Header>
  )
}

export default HeaderSite
