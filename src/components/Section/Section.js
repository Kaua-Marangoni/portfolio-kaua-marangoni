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
      <Paragraph>Desenvolvedor Web Front-End</Paragraph>
      <BoxLinks>
        <a
          className="links-social"
          href="https://www.linkedin.com/in/kau%C3%A3-marangoni-119ba41a8/"
          target="blank"
        >
          <ImagesLinks className="fab fa-linkedin"></ImagesLinks>
        </a>
        <a
          className="links-social"
          href="https://github.com/Kaua-Marangoni/"
          target="blank"
        >
          <ImagesLinks className="fab fa-github"></ImagesLinks>
        </a>
        <a
          className="links-social"
          href="https://www.instagram.com/kaua_marangoni/"
          target="blank"
        >
          <ImagesLinks className="fab fa-instagram"></ImagesLinks>
        </a>
      </BoxLinks>
    </Section>
  )
}

export default PrimarySection
