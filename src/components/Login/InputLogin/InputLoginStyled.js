import styled from "styled-components";

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: clamp(12px, 3vw, 18px);
`;

export const Input = styled.input`
  width: 100%;
  height: 25px;
  padding: 0 5px;
  font-size: clamp(11px, 2vw, 15px);
  outline: none;

  &:focus {
    box-shadow: 10px 10px 14px -5px #000000;
    border: none;
  }
`;
