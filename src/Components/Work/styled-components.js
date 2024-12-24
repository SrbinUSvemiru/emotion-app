import styled from "styled-components";




export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 2.3rem;
  padding-bottom: 4rem;
  padding-left: 9.25vw;
  padding-right: 9.25vw;
  position: fixed;
  background: ${({theme}) =>  theme?.palette?.mode === 'dark' ? 'linear-gradient(180deg, rgba(0,0,0,1) 64%, rgba(0,0,0,0.6041010154061625) 80%, rgba(0,0,0,0.1727284663865546) 89%, rgba(0,0,0,0.043876925770308106) 96%, rgba(0,0,0,0) 100%)' : 'linear-gradient(180deg, rgba(255,255,255,1) 64%, rgba(255,255,255,0.6041010154061625) 80%, rgba(255,255,255,0.1727284663865546) 89%, rgba(255,255,255,0.043876925770308106) 96%, rgba(0,0,0,0) 100%)'};
  z-index: 1000;

`;

export const Button = styled.div`
  all: unset;
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



export const Card = styled.div`
  width: 100%;
  display: flex;
  & > img {
    width: 50%;
  }
`;
