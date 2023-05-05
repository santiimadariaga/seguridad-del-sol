import styled, { css } from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { mobile, tablet } from "../../styles/mediaQueries";

export const CartContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 40%;
  height: auto;
  max-height: 80vh;
  padding: 20px;
  position: absolute;
  top: 90px;
  right: -100%;
  transition: all 1s ease;
  background-color: white;
  border-radius: 0 0 0 20px;
  box-shadow: -5px 10px 15px -5px #000000;
  overflow: scroll;
  z-index: 10;

  @media (max-width: 1230px) {
    width: 50%;
  }

  ${tablet} {
    width: 70%;
  }

  @media (max-width: 499px) {
    .title {
      width: 100%;
    }
    .content_btn {
      gap: 10px;
    }
  }

  ${mobile} {
    width: 85%;
  }
`;

export const BoxIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  transition: all 0.3s ease;
`;

export const IconStyled = styled(AiOutlineCloseCircle)`
  width: 25px;
  height: 25px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
`;

export const ContentTitle = styled.div`
  width: 100%;
`;

export const TitleCart = styled.p`
  text-align: left;
  font-size: clamp(20px, 5vw, 30px);
  font-weight: 700;
  background: linear-gradient(360deg, rgb(0, 0, 0), rgb(255, 0, 0));
  -webkit-background-clip: text;
  // firefox lo puede tomar sin el -webkit-animation, chrome no
  -webkit-text-fill-color: transparent;
`;

export const OpacityP = styled.p`
  font-size: clamp(10px, 2vw, 15px);
  opacity: 0.5;
  cursor: not-allowed;
`;

export const BoxPrices = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-size: clamp(15px, 3vw, 20px);
  font-weight: 700;
  background: linear-gradient(360deg, rgb(0, 0, 0), rgb(255, 0, 0));
  -webkit-background-clip: text;
  // firefox lo puede tomar sin el -webkit-animation, chrome no
  -webkit-text-fill-color: transparent;
`;

export const ContainerBtns = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const BtnFinalized = styled.button`
  padding: 15px;
  background: linear-gradient(360deg, rgb(0, 0, 0), rgb(255, 0, 0));
  color: white;
  cursor: pointer;
  border: none;
  border-radius: ${(props) =>
    props.delete ? "15px 0 0 15px" : "0 15px 15px 0"};
  font-size: clamp(16px, 3vw, 18px);
  transition: all 0.5s ease;

  &:hover {
    background: linear-gradient(360deg, rgb(50, 50, 50), rgb(255, 50, 50));
    transform: scale(0.9);
    transition: all 0.5s ease;
  }

  ${({ cartLength }) =>
    !cartLength &&
    css`
      border-radius: 0 15px 0 15px;
      opacity: 0.3;
      transform: scale(0.9);
      cursor: not-allowed;
      &:hover {
        background: linear-gradient(360deg, rgb(0, 0, 0), rgb(255, 0, 0));
      }
    `}
`;

export const ShowMore = styled.p`
  font-size: clamp(8px, 2vw, 12px);
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    color: rgb(50, 50, 50);
  }
`;
