import styled, { keyframes } from "styled-components";
import { flexCenter } from "../../../styles/common";
import { cardStyle } from "../../../constant/cardStyle";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const SkeletonCard = styled.div`
  width: 433px;
  ${cardStyle};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.GRAYSCALE[0]};
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.GRAYSCALE[1]} 25%,
    ${({ theme }) => theme.GRAYSCALE[0]} 50%,
    ${({ theme }) => theme.GRAYSCALE[1]} 75%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
`;

export const SkeletonContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const SkeletonLine = styled.div`
  height: ${(props) => props.height || "16px"};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.GRAYSCALE[1]} 25%,
    ${({ theme }) => theme.GRAYSCALE[0]} 50%,
    ${({ theme }) => theme.GRAYSCALE[1]} 75%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
  border-radius: 4px;
  width: ${(props) => props.width || "100%"};
`;

export const SkeletonWrapper = styled.div`
  width: 100%;
  ${flexCenter};
`;

export const SkeletonContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding: 40px 20px;
`;
