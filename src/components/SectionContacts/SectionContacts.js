import React from "react"

import {
  Section,
  TitleSection,
  Paragraph,
  BoxContacts,
  RowContacts,
  // HandClick,
  BoxLinks,
  ImagesLinks
} from "./SectionContactsStyles"

// import ImageHand from "../../assets/click.gif";

const SectionsContacts = () => {
  return (
    <Section id="contact">
      <TitleSection>Contato</TitleSection>

      <BoxContacts>
        <RowContacts>
          <i className="fas fa-map-marker-alt"></i>
          <Paragraph>Forquilhinha - Santa Catarina</Paragraph>
        </RowContacts>

        <RowContacts>
          <i className="fab fa-whatsapp"></i>
          <Paragraph>
            <a
              className="link-email"
              href="https://api.whatsapp.com/send?phone=5548996647887&text=Olá,%20gostaria%20de%20falar%20com%20você.%20Consegui%20seu%20contato%20pelo%20seu%20Portfólio."
              target="blank"
            >
              (48) 99664-7887
            </a>
          </Paragraph>
        </RowContacts>

        {/* <HandClick
          src={ImageHand}
          alt="Imagem indicando que você pode clicar no Email para contato"
        /> */}

        <RowContacts>
          <i className="far fa-envelope"></i>
          <a
            className="link-email"
            href="mailto:kauamarangonitj@gmail.com"
            target="blank"
          >
            kauamarangonitj@gmail.com
          </a>
        </RowContacts>

        <BoxLinks>
          <a
            className="links-social"
            href="https://www.linkedin.com/in/kau%C3%A3-marangoni-119ba41a8/"
            urrentTarget="blank"
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
      </BoxContacts>
    </Section>
  )
}

export default SectionsContacts
