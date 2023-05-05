import FormControl from "@mui/material/FormControl";
import styled from "styled-components";
import NativeSelect from "@mui/material/NativeSelect";
import { tablet } from "../../../styles/mediaQueries";

export const ContainerSelect = styled.div`
  width: 25%;
  min-width: 230px;
  padding-bottom: 12px;

  ${tablet} {
    min-width: 150px;
  }
`;

export const FormControlStyled = styled(FormControl)`
  width: 100%;
`;

export const NativeSelectStyled = styled(NativeSelect)`
  background-color: rgb(255, 166, 166);
  padding: 0 8px;
`;
