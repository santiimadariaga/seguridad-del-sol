import styled from 'styled-components';
import { Form } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button`
  width: 100%;
  height: 25px;
  margin-top: 10px;
  background-color: #b8b8b8;
  font-weight: 700;
  font-size: 13px;
  border: none;
  border-radius: 2px;
  box-shadow: 10px 10px 14px -5px #000000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #949494;
    transition: all 0.3s ease;
  }
`;

export const ErrorParraf = styled.p`
  &.showError {
    display: flex;
    justify-content: center;
    font-size: small;
    color: red;
  }
  display: none;
`;
