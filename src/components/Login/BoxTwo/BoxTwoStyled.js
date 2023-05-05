import styled from "styled-components";

export const Box = styled.div`
  width: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Welcome = styled.h1`
  font-size: clamp(20px, 5vw, 45px);
  color: #ffffff;
  text-shadow: 4px 3px 0 #7a7a7a;
  letter-spacing: 2px;
`;

export const ContentP = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Span = styled.a`
  transition: all 0.5s ease;
  &:hover {
    color: #6b6b6b;
  }
`;
