import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  display: none;
  justify-content: center;
`;

export const ModalBox = styled.div`
  width: 100%;
  border: none;
  background-color: green;
  transition: all 0.5s ease;
  padding: 10px;
  transition: all 0.3s ease;
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slide-top {
    0% {
      transform: translateY(100px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Confirm = styled.h1`
  font-size: clamp(15px, 2vw, 20px);
  text-align: center;
`;
