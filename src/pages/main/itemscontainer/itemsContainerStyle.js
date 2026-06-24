import styled from "styled-components";

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
