import styled from "styled-components";
import { tablet } from "../../styles/mediaQueries";

export const RecargasContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding-top: 35px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 50%;

  ${tablet} {
    width: 100%;
    padding: 10px 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleConsult = styled.h1`
  color: black;
  font-family: inherit;
  font-size: clamp(15px, 3vw, 30px);
  overflow: hidden;
  border-right: 2px solid red;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 1px;
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;

  ${tablet} {
    font-size: clamp(15px, 4vw, 30px);
    white-space: wrap;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: red;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;

  ${tablet} {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 600px;
`;
