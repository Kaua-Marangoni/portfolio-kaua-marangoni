import styled from "styled-components"

export const Section = styled.section`
  background: #434dcd;
  height: calc(100vh - 70px);
  color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .div-arrow-down {
    background: none;
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fa-chevron-down {
    color: #ffffff;
    font-size: 30px;
    padding: 5px;
    cursor: pointer;
    transition: all 150ms;
  }

  .fa-chevron-down:hover {
    opacity: 0.7;
  }
`

export const MyImage = styled.img`
  width: 18vw;
  max-width: 210px;
  min-width: 120px;
  margin-bottom: 30px;
  border-radius: 50% 10%;
`

export const TitleSection = styled.h2`
  text-align: center;
`

export const Paragraph = styled.p`
  text-align: center;
`

export const ImagesLinks = styled.i``

export const BoxLinks = styled.i`
  font-size: 25px;
  margin-top: 15px;
  display: flex;
  gap: 15px;
`
