import styled from "styled-components";
import { TextField } from "@mui/material";

export const LoginInputStyled = styled(TextField)`
  width: 100%;
  outline: none;
  background-color: rgb(255, 100, 100);
  box-shadow: 10px 10px 14px -5px #000000;
`;

export const InputContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ErrorMessageStyled = styled.p`
  color: red;
  font-size: clamp(12px, 2vw, 15px);
`;
