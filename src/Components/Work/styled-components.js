import styled from "styled-components";

export const Container = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: relative;
`;

export const Endtag = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  z-index: 20;
  top: -1rem;
  z-index: 100000;
  left: 2rem;
  @media (max-width: 425px) {
    left: 2rem;
    width: 40px;
  }
  @media (max-width: 325px) {
    width: 25px;
    left: 1rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 4.5vh;
  padding-bottom: 7vh;
  position: relative;
  padding-left: 9.25vw;
  padding-right: 9.25vw;
`;

export const Button = styled.div`
  all: unset;
  font-size: 1.5rem;
  color: white;
  position: relative;
  margin-left: 4rem;
  &::after {
    width: 0%;
    height: 1px;
    background: white;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.1 ease;
    -webkit-transition: width 0.2s;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &:hover {
    cursor: pointer;
    &::after {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    margin-left: 2rem;
  }
`;

export const GridContainer = styled.div`
  background: black;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%;

  display: flex;
  & > img {
    width: 100%;
  }
`;
