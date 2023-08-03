import styled from 'styled-components';
import { mobile } from '../../../styles/mediaQueries';

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
