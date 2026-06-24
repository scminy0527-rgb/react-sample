import styled from "styled-components";

// 메인 페이지 전체 바디
export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 메인 비디오 컨테이너
export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

// 비디오 태그 스타일
export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

// 아이템 영역
export const ItemsArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// 아이템 목록 컨테이너
export const ItemsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding: 40px 20px;
`;

// 조류탐지 카메라 관련 스타일
