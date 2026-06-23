import React from "react";
import styled from "styled-components";
import * as S from "./mainStyle";
import BirdCamera from "./components/BirdCamera";

const TestHeight = styled.div`
  height: 1500px;
`;

const Main = () => {
  return (
    <div>
      <S.VideoContainer>
        <S.Video autoPlay muted loop>
          <source src="/assets/video/main/main01.mp4" type="video/mp4" />
        </S.Video>
      </S.VideoContainer>

      {/* 조류 ai 카메라 관련 */}
      <BirdCamera />

      <TestHeight />
    </div>
  );
};

export default Main;
