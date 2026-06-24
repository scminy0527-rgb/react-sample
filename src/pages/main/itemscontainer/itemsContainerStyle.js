import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const ItemsArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ItemsContainerWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding: 40px 20px;
`;

// 스켈레톤 스타일
export const SkeletonCard = styled.div`
  width: 433px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
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
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
  border-radius: 4px;
  width: ${(props) => props.width || "100%"};
`;

// 에러 & 로딩 상태
export const StateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
`;

export const StateContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const StateIcon = styled.div`
  font-size: 48px;
  line-height: 1;
`;

export const StateText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #666;
  font-weight: 500;
`;

export const StateSubText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #999;
  line-height: 1.6;
`;
