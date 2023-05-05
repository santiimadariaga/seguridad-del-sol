import styled from "styled-components";

export const ContainerCartProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 5px 10px 10px;
`;

export const ContentProduct = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px;
  box-shadow: 0px 0px 10px 0px #000000;
`;

export const ContentTitle = styled.div`
  width: 25%;
`;

export const TitleProduct = styled.p`
  /* grid-area: title; */
  font-size: clamp(12px, 3vw, 20px);
  text-align: center;
`;

export const ImgContainer = styled.div`
  width: 25%;
  height: 150px;
  max-width: 180px;
  min-width: 135px;
  /* grid-area: img; */
  width: 100%;
`;

export const ImgCard = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerPlus = styled.div`
  /* grid-area: buttons; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const ContentBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Price = styled.p`
  font-size: clamp(16px, 3vw, 20px);
  font-weight: ${(props) => (props.total ? "700" : "500")};
`;
