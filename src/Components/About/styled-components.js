import styled from "styled-components";
import { animated } from "react-spring";



export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 2.3rem;
  padding-bottom: 2.3rem;
  padding-left: 9.25vw;
  background: black;
  padding-right: 9.25vw;
  z-index: 100;
  position: fixed;
  width: 100%;
  @media (max-width: 425px) {
    padding-bottom: 0px;
  }
`;

export const Button = styled.button`
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

export const TextContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 9.25vw;
  padding-right: 9.25vw;
  max-width: 1200px;
`;


export const RowFirst = styled(animated.div)`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 12rem;
`;

export const RowSecond = styled(animated.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  padding-top: 8rem;
`;

export const RowTheerd = styled(animated.div)`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 8rem;
`;

export const RowFourth = styled.div`
  display: flex;
  width: 100%;
  color: white;
  margin-top: 8rem;
  font-size: 3rem;
  letter-spacing: 0.2rem;
  padding-top: 8rem;
  font-family: Helvetica Neue;
  font-weight: 700;
`;

export const FirstParagraph = styled.div`
  font-size: 4rem;
  letter-spacing: 0.2rem;
  padding-top: 1rem;
  font-family: Helvetica Neue;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 3rem;
  }
  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const SecondParagraph = styled.div`
  font-size: 2.16rem;
  font-family: Baskerville;
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: normal;
  & p + p {
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & p + p {
      margin-top: 4vh;
      margin-left: 0;
    }
    & > p {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  margin-top: 5rem;
  padding-bottom: 3rem;
  @media (max-width: 470px) {
    flex-direction: column;
    & p + p {
      margin-top: 1rem;
    }
  }
`;

export const Image = styled.div`
  width: 200px;
  & > img {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 150px;
  }
`;
