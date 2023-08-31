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
  /* margin-top: 10px; */
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

export const ContainerLoader = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const ContentLoad = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 20px;

  &.showLoad {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 20px;
  }
`;
export const Loading = styled.img`
  width: 100%;
  height: 100%;
  animation: rotate 3s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorParraf = styled.p`
  &.showError {
    display: flex;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    color: red;
  }
  &.showSuccess {
    display: flex;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    color: green;
  }
  display: none;
`;
