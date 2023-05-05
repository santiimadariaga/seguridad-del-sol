import styled from "styled-components";
import { Form } from "formik";

export const FormStyled = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const TextAreaStyled = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  outline: none;
  border: none;
  background-color: rgb(255, 100, 100);
  padding: 5px;
  box-shadow: 10px 10px 14px -5px #000000;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  width: auto;
  padding: 15px;
  font-size: large;
  text-transform: uppercase;
  cursor: pointer;
  background-color: rgb(255, 100, 100);
  border: none;
  border-radius: 5px;

  &:hover {
    box-shadow: 0px 0px 15px -2px #000000;
  }
`;
