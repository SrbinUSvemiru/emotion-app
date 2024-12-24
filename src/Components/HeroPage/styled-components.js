import styled from "styled-components";
import { animated } from "react-spring";



export const Header = styled(animated.div)`
  width: 100%;
   background: ${({theme}) =>  theme?.palette?.background?.default};
  padding-top: 2.3rem;
  padding-left: 9.25vw;
  padding-right: 9.25vw;
  position: relative;
  z-index: 100;
  
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
  // @media (max-width: 425px) {
  //   left: 2rem;
  //   width: 50px;
  //   top: 0px;
  // }
  // @media (max-width: 325px) {
  //   width: 25px;
  //   top: 25px;
  //   left: 1rem;
  // }
`;

export const ArrowButtonsRow = styled(animated.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  margin: 0 auto;
  left: 0;
  top: 30vh;
  @media (max-width: 1000px) {
    top: 140%;
  }
`;

export const HeadingParagraph = styled.div`
  font-weight: 400;
  margin-right: 10vw;
  @media (max-width: 1200px) {
    margin-right: 2rem;
  }
  @media (max-width: 1000px) {
    margin-top: 7vh;
    margin-right: 0;
  }
`;


export const Buttons = styled.div`
  all: unset;
  font-size: 1.5rem;
  color: white;
  margin-left: 4rem;
  transition: all 0.1s linear;
  position: relative;
  z-index: 100;
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
  height: 100%;
  width: 100%;
  background: black;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const AnimatedParagraph = styled(animated.div)`
  position: absolute;
  top: 15%;
  width: 80%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0;
  display: flex;
  opacity: 0;
  margin-bottom: 5rem;
`;

export const Showreel = styled(animated.div)`
  width: 100vw;
  height: 100vw;
  max-width: 1500px;
  max-height: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

`;

export const Video = styled(animated.div)`
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  background: black;
  & #player {
    position: absolute;
    top: -32%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Circles = styled.div`
  width: 109vw;
  height: 109vw;
  max-width: 1700px;
  max-height: 1700px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 48%;
  transform: translateY(-50%);
  margin: 0 auto;
  z-index: -1;
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
