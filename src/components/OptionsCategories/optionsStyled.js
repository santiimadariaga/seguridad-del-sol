import styled from 'styled-components';

export const ContainerCategories = styled.div`
  width: 70%;
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 1059px) {
    justify-content: center;
  }
`;

export const BoxCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgb(255, 110, 110);
  font: inherit;
  font-weight: 700;
  font-size: clamp(13px, 2vw, 17px);
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 1px;

  &:hover {
    transform: translate(0, -2px);
    box-shadow: 0px 3px;
  }
  &:active {
    box-shadow: 0 1px;
    transform: translate(0, 1px);
  }
`;
