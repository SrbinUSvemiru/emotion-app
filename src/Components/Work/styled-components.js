import styled from "styled-components";

export const Container = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: relative;
`;

export const Endtag = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 20;
  top: -30px;
  left: 50px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
  padding-bottom: 70px;
`;

export const Button = styled.div`
  all: unset;
  font-size: 1.5rem;
  color: white;
  position: relative;
  margin-right: 5rem;
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
`;

export const GridContainer = styled.div`
  background: black;
  padding: 1rem;
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
