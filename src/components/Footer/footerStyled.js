import styled from 'styled-components';
import { barsMedia } from '../../styles/mediaQueries';

export const FooterContainer = styled.footer`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  background: linear-gradient(
    0deg,
    rgba(255, 103, 91, 1) 0%,
    rgba(255, 179, 173, 1) 65%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export const ContentFooter = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 10px 10px;
  gap: 10px;
`;

export const TextsContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-top: 40px;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 839px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const InfoFoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  gap: 8px;
  padding-top: 10px;
  padding-left: 10px;

  @media (max-width: 839px) {
    width: 100%;
  }
`;

export const AnchorFooter = styled.a`
  font-size: clamp(12px, 5vw, 16px);
  transition: all 0.2s ease;
  font-weight: 500;
  &:hover {
    color: rgb(155, 95, 95);
    transition: all 0.2s ease;
  }
  cursor: ${(props) => (props.notPointer ? 'context-menu' : 'pointer')};
`;

export const ContainerLogoFooter = styled.div``;

export const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  min-width: 100px;
`;

export const ImgLogo = styled.img`
  width: 80%;
  @media (max-width: 839px) {
    display: none;
  }
`;

export const ImgLogoSecondar = styled.img`
  display: none;
  @media (max-width: 839px) {
    display: flex;
    position: absolute;
    top: 40px;
    right: 0;
    width: 100px;
  }

  @media (max-width: 445px) {
    display: none;
  }
`;

export const ContactFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  align-items: start;
  padding-left: 200px;
  padding-top: 10px;
  gap: 8px;

  ${barsMedia} {
    padding-left: 100px;
  }

  @media (max-width: 839px) {
    padding-left: 10px;
  }
`;

export const ContentContact = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContentIco = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CopyText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
