import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  margin: 0 auto;
  width: 100%;
  overflowy: scroll;
  height: 100%;
  background: black;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
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
