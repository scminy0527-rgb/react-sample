import styled from "styled-components";
import {
  flexCenter,
  flexCenterColumn,
  h9Medium,
  h10Regular,
} from "../../../styles/common";

export const ItemsArea = styled.div`
  width: 100%;
  ${flexCenter};
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
  ${flexCenter};
  padding: 80px 20px;
`;

export const StateContent = styled.div`
  text-align: center;
  ${flexCenterColumn};
  gap: 16px;
`;

export const StateIcon = styled.div`
  font-size: 48px;
  line-height: 1;
`;

export const StateText = styled.p`
  margin: 0;
  ${h9Medium};
  color: #666;
`;

export const StateSubText = styled.p`
  margin: 0;
  ${h10Regular};
  color: ${({ theme }) => theme.GRAYSCALE[7]};
  line-height: 1.6;
`;
