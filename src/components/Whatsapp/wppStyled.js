import styled from "styled-components";
import { tablet } from "../../styles/mediaQueries";

export const WppContainer = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 10px;
  right: 10px;
  z-index: 1;
  cursor: pointer;

  ${tablet} {
    width: 40px;
  }
`;
