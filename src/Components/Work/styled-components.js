import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  max-width: 1440px;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Endtag = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  z-index: 20;
  top: -0.5rem;
  z-index: 100000;
  left: 0;
  margin-left: 8vw;
  @media (max-width: 425px) {
    top: 0.2rem;
    width: 40px;
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
  padding: 2rem;
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
