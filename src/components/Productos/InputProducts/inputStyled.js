import styled from "styled-components";
import { mobile, tablet } from "../../../styles/mediaQueries";

export const InputSearch = styled.form`
  display: flex;
  justify-content: center;
  width: 60%;

  ${tablet} {
    width: 80%;
  }

  ${mobile} {
    flex-direction: column;
    align-items: end;
    width: 100%;
    gap: 10px;
  }
`;

export const InputSyled = styled.input`
  width: 80%;
  height: 40px;
  padding: 20px 10px;
  font-size: clamp(13px, 2.5vw, 20px);
  background-color: rgb(255, 166, 166);
  outline: none;
  border: none;

  &:focus {
    box-shadow: 0px 8px 12px -3px #000000;
  }

  ${mobile} {
    width: 100%;
  }
`;

export const ButtonSearch = styled.button`
  width: 100px;
  padding: 0 15px;
  font-size: clamp(13px, 2vw, 20px);
  border: none;
  background-color: rgb(255, 166, 166);
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 150, 150);
  }

  ${tablet} {
    padding: 0 5px;
  }

  ${mobile} {
    padding: 5px;
    width: 30%;
    border-radius: 20px;
  }
`;
