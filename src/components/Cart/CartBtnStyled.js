import styled from "styled-components";
import { BsCart } from "react-icons/bs";
import { barsMedia } from "../../styles/mediaQueries";

export const ContainerCartImg = styled.div`
  display: none;
  position: relative;

  ${barsMedia} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
  }
`;

export const CartIconSyled = styled(BsCart)`
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

export const LiStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(17px, 5vw, 20px);
  font-weight: 400;
  position: relative;

  ${barsMedia} {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0000004d;
  backdrop-filter: blur(5px);
  transition: all 0.5s linear;
`;

export const Bubble = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-color: red;
  border: 1px solid white;
  border-radius: 50%;

  @media (min-width: 992px) {
    z-index: 1;
  }
`;
