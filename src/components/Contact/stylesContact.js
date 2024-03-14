import styled from 'styled-components';
import { mobile } from '../../styles/mediaQueries';

export const ContactStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
  max-width: 1400px;
  flex-wrap: wrap;

  @media (max-width: 655px) {
    gap: 15px;
  }
`;

export const ContainerContacts = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;

  @media (max-width: 839px) {
    padding: 20px 0;
  }
  @media (max-width: 655px) {
    width: 80%;
  }
`;

export const ContentContacts = styled.div`
  width: 100%;
  height: 100%;

  padding: ${(props) => (props.ig ? '0 35px' : '0 20px')};
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 25px;

  ${mobile} {
    padding: 0;
  }
`;

export const ImgContacts = styled.img`
  transition: all 0.3s ease;
  width: 100%;
  &:hover {
    transition: all 0.3s ease;
    transform: scale(1.05);
  }
`;

export const BtnContact = styled.button`
  width: 300px;
  height: 60px;
  border: none;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(15px, 2.2vw, 20px);
  font-weight: 600;
  font-style: normal;

  background: ${(props) =>
    props.ig ? 'rgb(252, 176, 69)' : 'rgb(18, 140, 126)'};
  background: ${(props) =>
    props.ig
      ? 'linear-gradient(35deg, rgba(252, 176, 69, 1) 15%, rgba(253, 29, 191, 1) 52%, rgba(131, 58, 180, 1) 93%)'
      : 'rgb(18, 140, 126)'};

  border-radius: ${(props) => (props.ig ? '40px' : 'none')};

  cursor: pointer;
  box-shadow: rgb(0, 0, 0) 0px 15px 20px -15px;
  transition: all 0.1s ease;

  &:hover {
    transform: translate(0, -5px);
    box-shadow: rgb(0, 0, 0) 0px 25px 20px -15px;
  }

  &:active {
    transition: all 0.1s ease;
    transform: translate(0, 0);
    box-shadow: rgb(0, 0, 0) 0px 15px 20px -15px;
  }

  @media (max-width: 839px) {
    width: 200px;
    height: 60px;
  }
`;
