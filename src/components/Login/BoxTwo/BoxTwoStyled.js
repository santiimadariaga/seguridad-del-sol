import styled, { css } from "styled-components";
import { tablet } from "../../../styles/mediaQueries";

export const ContentBox = styled.div`
  width: 50%;
  min-width: 310px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1042px) {
    width: 100%;
    min-width: none;
  }

  ${tablet} {
    padding: 20px 10px 30px;
    min-width: 0;
  }
`;

export const Box = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Welcome = styled.h1`
  font-size: clamp(24px, 5vw, 45px);
  color: #ffffff;
  text-shadow: 4px 3px 0 #7a7a7a;
  letter-spacing: 2px;
`;

export const ContentP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3px;

  ${({ media }) =>
    media
      ? css`
          display: none;

          @media (max-width: 1042px) {
            display: flex;
            padding-top: 15px;
          }
        `
      : css`
          @media (max-width: 1042px) {
            display: none;
          }
        `}
`;

export const Span = styled.a`
  font-size: clamp(12px, 3vw, 18px);
  transition: all 0.5s ease;
  &:hover {
    color: #6b6b6b;
  }
`;
