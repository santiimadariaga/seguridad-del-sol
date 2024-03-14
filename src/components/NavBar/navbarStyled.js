import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { barsMedia, mobile, tablet } from '../../styles/mediaQueries';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background: rgb(255, 255, 255);
  box-shadow: 0px 15px 20px -15px #000000;
  margin: 0 auto;
  height: 90px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px 20px;
  max-width: 1400px;
  width: 100%;
`;

export const Logo = styled(Link)`
  display: flex;
  width: 150px;
  z-index: 10;

  ${tablet} {
    width: 125px;
  }

  ${mobile} {
    width: 100px;
  }
`;

export const FlexNav = styled.div`
  display: flex;
  gap: 35px;

  ${barsMedia} {
    flex-direction: row-reverse;
  }
`;

export const MenuIconStyled = styled(MenuIcon)`
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  @media (min-width: 993px) {
    visibility: hidden;
  }
`;

export const CloseIconStyled = styled(CloseIcon)`
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  @media (min-width: 992px) {
    visibility: hidden;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0000004d;
  backdrop-filter: blur(5px);
  transition: all 0.5s linear;
`;
