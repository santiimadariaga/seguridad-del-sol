import styled from "styled-components";
import heroBg from "../assets/img/hero_bg2.jpg";
// styled no me toma la importacion desde "../assets/imagenes"
import { barsMedia, mobile } from "../../styles/mediaQueries";

export const HeroContainer = styled.section`
  height: 90vh;
  width: 100%;
  background-image: url(${heroBg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 85%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

export const ContentHero = styled.div`
  max-width: 1400px;
  padding-top: 50px;
  padding-right: 80px;
  display: flex;
  justify-content: end;
  flex: 1 1 40%;

  ${barsMedia} {
    padding-right: 30px;
  }

  ${mobile} {
    width: 100%;
    padding-right: 10px;
    justify-content: center;
  }
`;

export const TextsHero = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: right;

  ${barsMedia} {
    width: 90%;
  }

  ${mobile} {
    align-items: center;
    text-align: center;
  }
`;

export const TitleHero = styled.h1`
  font-size: clamp(29px, 6vw, 45px);
  background: linear-gradient(360deg, rgb(0, 0, 0), rgb(255, 0, 0));
  -webkit-background-clip: text;
  // firefox lo puede tomar sin el -webkit-animation, chrome no
  -webkit-text-fill-color: transparent;
`;

export const TextHero = styled.p`
  font-size: clamp(11px, 2vw, 18px);
`;
