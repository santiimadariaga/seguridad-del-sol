import styled from "styled-components";
import bgLogin from "../assets/img/hero-login.jpg";
import { mobile, tablet } from "../../styles/mediaQueries";

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

  ${mobile} {
    padding: 60px 15px;
  }
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
  gap: 20px;
  height: auto;
  width: 70%;
  padding: 30px 40px;
  box-shadow: 0px 15px 28px -15px #000000;
  justify-content: space-between;
  background-color: #b8b8b8;
  flex-wrap: wrap-reverse;
  z-index: 1;

  @media (max-width: 1042px) {
    width: 90%;
    gap: 0;
  }

  ${tablet} {
    padding: 20px 15px 30px;
  }

  ${mobile} {
    width: 100%;
    padding: 20px 5px 30px;
  }
`;
