import styled from "styled-components";



export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 2.3rem;
  padding-bottom: 2.3rem;
  padding-left: 9.25vw;
  padding-right: 9.25vw;
  position: fixed;
  background: black;
  z-index: 100;

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
  margin-top: 11.5vh;
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
