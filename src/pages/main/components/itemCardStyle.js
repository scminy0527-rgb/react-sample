import styled from "styled-components";
import { h8Bold, h10Regular, h10Medium } from "../../../styles/common";
import { cardStyle } from "../../../constant/cardStyle";

export const ItemCard = styled.div`
  width: 433px;
  ${cardStyle};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.PALETTE.white};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const CardTitle = styled.h3`
  margin: 0;
  ${h8Bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

export const CardDescription = styled.p`
  margin: 0;
  ${h10Regular};
  color: #666;
`;

export const ViewMoreButton = styled.button`
  align-self: flex-start;
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.PALETTE.black};
  color: ${({ theme }) => theme.PALETTE.white};
  border: none;
  border-radius: 4px;
  ${h10Medium};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.TEXT_COLOR.basic};
  }
`;
