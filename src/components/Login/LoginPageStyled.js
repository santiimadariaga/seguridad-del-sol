import styled from "styled-components";
import bgLogin from "../assets/img/hero-login.jpg";

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: auto;
  width: 100%;
  max-width: 1400px;
  padding: 80px 50px;
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgLogin});
  backdrop-filter: blur(5px);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 70%;
  padding: 30px 40px;
  box-shadow: 0px 15px 28px -15px #000000;
  justify-content: space-between;
  background-color: #b8b8b8;
  flex-wrap: wrap-reverse;
  z-index: 1;
`;
