import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  margin: 0 auto;
`;

export const Header = styled(animated.div)`
  width: 100%;
  background: black;
  padding-left: 50px;
  position: relative;
  z-index: 100;
  & .right {
    margin-right: 7rem;
    display: flex;
    font-weight: 500;
  }

  & #arrow-buttons {
    display: flex;
    width: 130px;
    justify-content: space-between;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding-top: 50px;
`;

export const ArrowButtonsRow = styled(animated.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  margin: 0 auto;
  left: 0;
  top: 150%;
`;

export const HeadingParagraph = styled.div`
  font-weight: 400;
  margin-left: 20rem;
  color: white;
  font-size: 1.87rem;
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

export const Buttons = styled.div`
  all: unset;
  font-size: 1.5rem;
  color: white;
  margin-right: 5rem;
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
  color: white;
  width: 630px;
  top: 15%;
  right: 20%;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  & > p {
    font-size: 1.2rem;
    max-width: 300px;
    & > span {
      font-weight: 900;
    }
  }
`;

export const Showreel = styled(animated.div)`
  width: 1600px;
  height: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
`;

export const Video = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  background: black;

  & #player {
    position: absolute;
    top: 20%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
`;

export const Circles = styled.div`
  width: 1700px;
  height: 1700px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 47%;
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
