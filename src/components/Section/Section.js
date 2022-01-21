import React from "react"

import ImageMy from "../../assets/my-image-backgroung-blue.png"
import {
  Section,
  MyImage,
  Paragraph,
  TitleSection,
  BoxLinks,
  ImagesLinks
} from "./SectionStyles"

const PrimarySection = () => {
  return (
    <Section id="sobre">
      <MyImage src={ImageMy} alt="Minha foto" />
      <TitleSection>Kauã Marangoni</TitleSection>
      <Paragraph>Desenvolvedor Web Full-Stack</Paragraph>
      <BoxLinks>
        <a
          className="links-social"
          href="https://www.linkedin.com/in/kaua-marangoni/"
          target="_blank"
          rel="noreferrer"
        >
          <ImagesLinks className="fab fa-linkedin"></ImagesLinks>
        </a>
        <a
          className="links-social"
          href="https://github.com/Kaua-Marangoni/"
          target="_blank"
          rel="noreferrer"
        >
          <ImagesLinks className="fab fa-github"></ImagesLinks>
        </a>
        <a
          className="links-social"
          href="https://www.instagram.com/kaua_marangoni/"
          target="_blank"
          rel="noreferrer"
        >
          <ImagesLinks className="fab fa-instagram"></ImagesLinks>
        </a>
      </BoxLinks>

      <div className="div-arrow-down">
        <a className="arrow-down" href="#projects">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </Section>
  )
}

export default PrimarySection
