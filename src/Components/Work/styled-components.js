import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: scroll;
`;

export const Card = styled.div`
  height: ${(props) => props.height}px;
  background: red;
`;
