import styled from "styled-components";

export const Header = styled.header`
  background: #3e3e3e;
  color: #f3f3f3;
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const H1 = styled.h1`
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
`;

export const Ul = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  text-decoration: none;
  padding: 0 20px;
  transition: all 150ms;
  cursor: pointer;
`;