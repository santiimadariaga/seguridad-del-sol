import styled from "styled-components";

export const Box = styled.div`
  height: auto;
  width: 40%;
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
`;

export const Button = styled.button`
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
