import styled from "styled-components";
import { h8Bold } from "../../../styles/common";
import theme from "../../../styles/theme";

// 헤더
export const HeaderBody = styled.header`
  position: fixed;
  height: 128px;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, ${({ $opacity }) => $opacity * 0.8});
  /* backdrop-filter: blur(${({ $opacity }) => $opacity * 12}px); */

  transition:
    background-color 0.15s ease,
    backdrop-filter 0.15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// 헤더 내 컨텐츠
export const HeaderContent = styled.div`
  /* width: 100%; */
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 오른쪽 버튼 목록
export const HeaderButtonList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

// 오른쪽 버튼 각각
export const HeaderButton = styled.button`
  ${h8Bold}
  color: ${theme.PALETTE.white};
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${theme.PALETTE.primary.light};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${theme.PALETTE.primary.light};

    &::after {
      transform: scaleX(1);
    }
  }
`;
