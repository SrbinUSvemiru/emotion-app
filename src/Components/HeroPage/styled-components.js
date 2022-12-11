import styled from "styled-components";
import { animated } from "react-spring";

export const Header = styled(animated.div)`
  width: 100%;
  background: black;
  padding-left: 50px;
  position: relative;
  z-index: 5;
  & #heading-paragraph {
    font-weight: "400";
    margin-left: 20rem;
  }
  & .heading {
    color: white;
    font-size: 1.87rem;
    display: flex;
  }
  &  .right {
    margin-right: 7rem;
    display: flex;
    font-weight: 500;
    
    }
  }
  & #row{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    padding-top: 50px;
  }
  & #arrow-buttons{
    position: absolute;
  z-index: 15;
  left: 50%;
  transform: translateX(-50%);
  top: 12.5rem;
  display: flex;
  width: 130px;
  justify-content: space-between;
  }
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

export const Work = styled.button`
  all: unset;
  font-size: 1.5rem;
  color: white;
  margin-right: 5rem;
  transition: all 0.1s linear;
  position: relative;
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

export const About = styled.button`
  all: unset;
  font-size: 1.5rem;
  color: white;
  position: relative;
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

export const Hero = styled(animated.div)`
  height: calc(100vh - 120px);
  width: 100%;
  background: black;
  overflow: hidden;
  position: relative;
`;

export const Showreel = styled(animated.div)`
  width: calc(100vw - 120px);
  height: calc(100vw - 120px);
  position: relative;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0;
`;

export const Circles = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  transform: translateY(43%);
  margin: 0 auto;
`;

export const Masked = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
  z-index: 1;
  margin: auto;
  padding: 0;
  overflow: hidden;
  position: relative;
`;

export const Button = styled.button`
  all: unset;
  border-radius: 50%;
  background: white;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled(animated.button)`
  all: unset;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  right: 8rem;
  top: 3rem;

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
