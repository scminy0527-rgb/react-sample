import styled from "styled-components";
import {
  flexCenterColumn,
  flexCenter,
  h3Bold,
  h8Medium,
  h10Regular,
} from "../../../styles/common";
import { cardStyle } from "../../../constant/cardStyle";

export const AiDataSection = styled.div`
  width: 100%;
  padding: 80px 20px;
  ${flexCenterColumn};
  gap: 60px;
  background-color: ${({ theme }) => theme.PALETTE.white};
`;

export const SectionHeader = styled.div`
  ${flexCenterColumn};
  gap: 24px;
  max-width: 800px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  ${h3Bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

export const SectionDescription = styled.p`
  margin: 0;
  ${h10Regular};
  color: ${({ theme }) => theme.GRAYSCALE[7]};
  line-height: 1.6;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

export const AiCard = styled.div`
  width: 300px;
  ${cardStyle};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.PALETTE.white};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.GRAYSCALE[10]};
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const CardTitle = styled.h4`
  margin: 0;
  ${h8Medium};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

export const CardDescription = styled.p`
  margin: 0;
  ${h10Regular};
  color: ${({ theme }) => theme.GRAYSCALE[7]};
  line-height: 1.5;
`;

export const MoreButtonContainer = styled.div`
  width: 100%;
  ${flexCenter};
  padding: 40px 20px;
`;

export const MoreButton = styled.button`
  padding: 14px 48px;
  background-color: ${({ theme }) => theme.PALETTE.primary.main};
  color: ${({ theme }) => theme.PALETTE.white};
  border: none;
  border-radius: 4px;
  ${h8Medium};
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.primary.dark};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
