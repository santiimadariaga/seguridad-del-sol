import styled from 'styled-components';
import { barsMedia, mobile, tablet } from '../../../styles/mediaQueries';

export const Lista = styled.ul`
  display: flex;
  align-items: center;
  gap: 35px;
  font-size: clamp(17px, 5vw, 20px);
  font-weight: 400;
  z-index: 10;

  ${barsMedia} {
    display: flex;
    gap: 60px;
    align-items: center;
    background-color: #fafafa;
    padding: 10px 20px;
    padding-top: 50px;
    flex-direction: column;
    height: 100vh;
    width: 30vw;
    position: fixed;
    right: -100%;
    top: 90px;
    box-shadow: -10px 20px 10px rgb(0 0 0 / 25%);
    transition: all 0.5s ease-in-out;
    visibility: visible;
  }

  ${tablet} {
    width: 40vw;
  }

  ${mobile} {
    width: 50vw;
    padding: 50px 10px 0;
  }
`;

export const AnchorMenu = styled.a`
  color: rgb(92, 0, 0);
  position: relative;
  z-index: 1;
  padding: 10px;
  font-weight: 500;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: solid;
    transition: all 0.6s ease;
    border-radius: 0.5px;
  }

  &:hover::before,
  &:hover::after {
    width: 80%;
    height: 70%;
  }

  &::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: red;
    border-left-color: red;
  }

  &::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: red;
    border-right-color: red;
  }
`;
