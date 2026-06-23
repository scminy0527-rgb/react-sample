import styled from "styled-components";

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
