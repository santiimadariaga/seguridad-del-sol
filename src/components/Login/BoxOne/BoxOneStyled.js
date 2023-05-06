import styled from "styled-components";
import { mobile } from "../../../styles/mediaQueries";
import { Form } from "formik";

export const Box = styled.div`
  height: auto;
  width: 40%;
  min-width: 250px;
  padding: 40px 30px 50px;
  background-color: coral;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 15px 28px -15px #000000;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }

  @media (max-width: 1042px) {
    margin: 0 auto;
    max-width: 90%;
    width: 100%;
  }

  ${mobile} {
    min-width: 0;
    padding: 40px 15px 40px;
  }
`;

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
